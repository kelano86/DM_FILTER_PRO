"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstance = void 0;
const tslib_1 = require("tslib");
const cloud_request_1 = require("./cloud_request");
const async_retry_1 = require("../../util/async_retry");
const errors = tslib_1.__importStar(require("../../errors"));
const axios_1 = require("axios");
const MAX_RETRIES = 3;
const createInstance = async (runId, instanceData, timeout = 0) => {
    let attemptNumber = 0;
    return (0, async_retry_1.asyncRetry)(async () => {
        try {
            const { data } = await cloud_request_1.CloudRequest.post(`/runs/${runId}/instances`, instanceData, {
                headers: {
                    'x-route-version': '5',
                    'x-cypress-run-id': runId,
                    'x-cypress-request-attempt': `${attemptNumber}`,
                },
                timeout,
            });
            return data;
        }
        catch (err) {
            attemptNumber++;
            throw err;
        }
    }, {
        maxAttempts: MAX_RETRIES,
        retryDelay: (0, async_retry_1.exponentialBackoff)(),
        shouldRetry: cloud_request_1.isRetryableCloudError,
        onRetry: (delay, err) => {
            errors.warning('CLOUD_API_RESPONSE_FAILED_RETRYING', {
                delayMs: delay,
                tries: MAX_RETRIES - attemptNumber,
                response: (0, axios_1.isAxiosError)(err) ? err : err instanceof Error ? err : new Error(String(err)),
            });
        },
    })();
};
exports.createInstance = createInstance;
