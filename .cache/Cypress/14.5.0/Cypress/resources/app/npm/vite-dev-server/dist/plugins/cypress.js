"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cypress = void 0;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const node_html_parser_1 = require("node-html-parser");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const debug = (0, debug_1.default)('cypress:vite-dev-server:plugins:cypress');
const INIT_FILEPATH = path_1.default.resolve(__dirname, '../../client/initCypressTests.js');
const HMR_DEPENDENCY_LOOKUP_MAX_ITERATION = 50;
function getSpecsPathsSet(specs) {
    return new Set(specs.map((spec) => spec.absolute));
}
const Cypress = (options, vite) => {
    let base = '/';
    const projectRoot = options.cypressConfig.projectRoot;
    const supportFilePath = options.cypressConfig.supportFile ? path_1.default.resolve(projectRoot, options.cypressConfig.supportFile) : false;
    const devServerEvents = options.devServerEvents;
    const specs = options.specs;
    const indexHtmlFile = options.cypressConfig.indexHtmlFile;
    let specsPathsSet = getSpecsPathsSet(specs);
    // TODO: use async fs methods here
    // eslint-disable-next-line no-restricted-syntax
    let loader = fs_1.default.readFileSync(INIT_FILEPATH, 'utf8');
    devServerEvents.on('dev-server:specs:changed', ({ specs, options }) => {
        if (options === null || options === void 0 ? void 0 : options.neededForJustInTimeCompile) {
            // if an option is needed for just in time compile, no-op as this isn't supported in vite
            return;
        }
        debug(`dev-server:secs:changed: ${specs.map((spec) => spec.relative)}`);
        specsPathsSet = getSpecsPathsSet(specs);
    });
    return {
        name: 'cypress:main',
        enforce: 'pre',
        configResolved(config) {
            base = config.base;
        },
        async transformIndexHtml(html) {
            // it's possible other plugins have modified the HTML
            // before we get to. For example vitejs/plugin-react will
            // add a preamble. We do our best to look at the HTML we
            // receive and inject it.
            // For now we just grab any `<script>` tags and inject them to <head>.
            // We will add more handling as we learn the use cases.
            const root = (0, node_html_parser_1.parse)(html);
            const scriptTagsToInject = root.childNodes.filter((node) => {
                return node instanceof node_html_parser_1.HTMLElement && node.rawTagName === 'script';
            });
            const indexHtmlPath = path_1.default.resolve(projectRoot, indexHtmlFile);
            debug('resolved the indexHtmlPath as', indexHtmlPath, 'from', indexHtmlFile);
            let indexHtmlContent = await fs_1.default.promises.readFile(indexHtmlPath, { encoding: 'utf8' });
            // Inject the script tags
            indexHtmlContent = indexHtmlContent.replace('<head>', `<head>
        ${scriptTagsToInject.join('')}
      `);
            // find </body> last index
            const endOfBody = indexHtmlContent.lastIndexOf('</body>');
            // insert the script in the end of the body
            const newHtml = `
        ${indexHtmlContent.substring(0, endOfBody)}
        <script>${loader}</script>
        ${indexHtmlContent.substring(endOfBody)}
      `;
            return newHtml;
        },
        configureServer: async (server) => {
            server.middlewares.use(`${base}index.html`, async (req, res) => {
                const transformedIndexHtml = await server.transformIndexHtml(base, '');
                return res.end(transformedIndexHtml);
            });
        },
        handleHotUpdate: ({ server, file }) => {
            debug('handleHotUpdate - file', file);
            // If the user provided IndexHtml is changed, do a full-reload
            if (vite.normalizePath(file) === path_1.default.resolve(projectRoot, indexHtmlFile)) {
                server.ws.send({
                    type: 'full-reload',
                });
                return;
            }
            // get the graph node for the file that just got updated
            let moduleImporters = server.moduleGraph.fileToModulesMap.get(file);
            let iterationNumber = 0;
            const exploredFiles = new Set();
            // until we reached a point where the current module is imported by no other
            while (moduleImporters === null || moduleImporters === void 0 ? void 0 : moduleImporters.size) {
                if (iterationNumber > HMR_DEPENDENCY_LOOKUP_MAX_ITERATION) {
                    debug(`max hmr iteration reached: ${HMR_DEPENDENCY_LOOKUP_MAX_ITERATION}; Rerun will not happen on this file change.`);
                    return;
                }
                // as soon as we find one of the specs, we trigger the re-run of tests
                for (const mod of moduleImporters.values()) {
                    debug('handleHotUpdate - mod.file', mod.file);
                    if (mod.file === supportFilePath) {
                        debug('handleHotUpdate - support compile success');
                        devServerEvents.emit('dev-server:compile:success');
                        // if we update support we know we have to re-run it all
                        // no need to check further
                        return;
                    }
                    if (mod.file && specsPathsSet.has(mod.file)) {
                        debug('handleHotUpdate - spec compile success', mod.file);
                        devServerEvents.emit('dev-server:compile:success', { specFile: mod.file });
                        // if we find one spec, does not mean we are done yet,
                        // there could be other spec files to re-run
                        // see https://github.com/cypress-io/cypress/issues/17691
                    }
                }
                // get all the modules that import the current one
                moduleImporters = getImporters(moduleImporters, exploredFiles);
                iterationNumber += 1;
            }
            return;
        },
    };
};
exports.Cypress = Cypress;
/**
 * Gets all the modules that import the set of modules passed in parameters
 * @param modules the set of module whose dependents to return
 * @param alreadyExploredFiles set of files that have already been looked at and should be avoided in case of circular dependency
 * @returns a set of ModuleMode that import directly the current modules
 */
function getImporters(modules, alreadyExploredFiles) {
    const allImporters = new Set();
    modules.forEach((m) => {
        if (m.file && !alreadyExploredFiles.has(m.file)) {
            alreadyExploredFiles.add(m.file);
            m.importers.forEach((imp) => {
                allImporters.add(imp);
            });
        }
    });
    return allImporters;
}
