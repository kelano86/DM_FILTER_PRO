"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeNetworkErrorMessage = void 0;
const AXIOS_ERROR_NAME = 'AxiosError';
const normalizeNetworkErrorMessage = (error) => {
    return error.name === AXIOS_ERROR_NAME ? error.message : `${error.name}: ${error.message}`;
};
exports.normalizeNetworkErrorMessage = normalizeNetworkErrorMessage;
