"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const soap = __importStar(require("soap"));
const wsdl = require.resolve("@bloxrev/rccclient-node/RCCService.wsdl");
class RCCClient {
    constructor(ip, port) {
        this.url = `http://${ip}:${port}`;
    }
    callToService(sender, options, callback) {
        soap.createClient(wsdl, (err, client) => {
            if (err) {
                throw err;
            }
            client.setEndpoint(this.url);
            client[sender](options, (error, result) => {
                if (error) {
                    throw error;
                }
                callback(result);
            });
        });
    }
    HelloWorld(callback) {
        this.callToService("HelloWorld", {}, callback);
    }
    GetVersion(callback) {
        this.callToService("GetVersion", {}, callback);
    }
    GetStatus(callback) {
        this.callToService("GetStatus", {}, callback);
    }
    OpenJob(job, script = null, callback) {
        const options = { job, script };
        this.callToService("OpenJob", options, callback);
    }
    CloseAllJobs(callback) {
        this.callToService("CloseAllJobs", {}, callback);
    }
    Diag(callback) {
        this.callToService("Diag", {}, callback);
    }
    DiagEx(callback) {
        this.callToService("DiagEx", {}, callback);
    }
    GetAllJobs(callback) {
        this.callToService("GetAllJobs", {}, callback);
    }
    GetAllJobsEx(callback) {
        this.callToService("GetAllJobsEx", {}, callback);
    }
    CloseExpiredJobs(callback) {
        this.callToService("CloseExpiredJobs", {}, callback);
    }
}
exports.default = RCCClient;
