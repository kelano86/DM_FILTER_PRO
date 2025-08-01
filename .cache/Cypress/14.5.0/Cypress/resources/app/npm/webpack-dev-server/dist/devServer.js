"use strict";
/// <reference types="cypress" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThirdPartyDefinition = exports.devServer = void 0;
const tslib_1 = require("tslib");
const createWebpackDevServer_1 = require("./createWebpackDevServer");
const debug_1 = tslib_1.__importDefault(require("debug"));
const nextHandler_1 = require("./helpers/nextHandler");
const sourceRelativeWebpackModules_1 = require("./helpers/sourceRelativeWebpackModules");
const angularHandler_1 = require("./helpers/angularHandler");
const debug = (0, debug_1.default)('cypress:webpack-dev-server:devServer');
/**
 * import { devServer } from '@cypress/webpack-dev-server'
 *
 * Creates & returns a WebpackDevServer for serving files related
 * to Cypress Component Testing
 *
 * @param config
 */
function devServer(devServerConfig) {
    return new Promise(async (resolve, reject) => {
        const result = await devServer.create(devServerConfig);
        result.server.start().then(() => {
            if (!result.server.options.port) {
                return reject(new Error(`Expected port ${result.server.options.port} to be a number`));
            }
            debug(`Component testing webpack server ${result.version} started on port %s`, result.server.options.port);
            resolve({
                port: result.server.options.port,
                // Close is for unit testing only. We kill this child process which will handle the closing of the server
                close: async (done) => {
                    debug('closing dev server');
                    result.server.stop().then(() => done === null || done === void 0 ? void 0 : done()).catch(done).finally(() => {
                        debug('closed dev server');
                    });
                },
            });
        }).catch(reject);
    });
}
exports.devServer = devServer;
const thirdPartyDefinitionPrefixes = {
    // matches @org/cypress-ct-*
    namespacedPrefixRe: /^@.+?\/cypress-ct-.+/,
    globalPrefix: 'cypress-ct-',
};
function isThirdPartyDefinition(framework) {
    return framework.startsWith(thirdPartyDefinitionPrefixes.globalPrefix) ||
        thirdPartyDefinitionPrefixes.namespacedPrefixRe.test(framework);
}
exports.isThirdPartyDefinition = isThirdPartyDefinition;
async function getPreset(devServerConfig) {
    const defaultWebpackModules = () => ({ sourceWebpackModulesResult: (0, sourceRelativeWebpackModules_1.sourceDefaultWebpackDependencies)(devServerConfig) });
    // Third party library (eg solid-js, lit, etc)
    if (devServerConfig.framework && isThirdPartyDefinition(devServerConfig.framework)) {
        return defaultWebpackModules();
    }
    switch (devServerConfig.framework) {
        case 'next':
            return await (0, nextHandler_1.nextHandler)(devServerConfig);
        case 'angular':
            return await (0, angularHandler_1.angularHandler)(devServerConfig);
        case 'react':
        case 'vue':
        case 'svelte':
        case undefined:
            return defaultWebpackModules();
        default:
            throw new Error(`Unexpected framework ${devServerConfig.framework}, please visit https://on.cypress.io/frameworks to see a list of supported frameworks`);
    }
}
/**
 * Synchronously create the webpack server instance, without starting.
 * Useful for testing
 *
 * @internal
 */
devServer.create = async function (devServerConfig) {
    const { frameworkConfig, sourceWebpackModulesResult } = await getPreset(devServerConfig);
    const { server, compiler } = await (0, createWebpackDevServer_1.createWebpackDevServer)({
        devServerConfig,
        frameworkConfig,
        sourceWebpackModulesResult,
    });
    const result = {
        server,
        compiler,
        version: sourceWebpackModulesResult.webpackDevServer.majorVersion,
    };
    return result;
};
exports.default = devServer;
