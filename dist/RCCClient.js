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
const path_1 = require("path");
const wsdl = (0, path_1.resolve)('./node_modules/@bloxrev/rccclient-node/RCCService.wsdl');
class RCCClient {
    constructor(ip, port) {
        this.url = `http://${ip}:${port}`;
    }
    callToService(sender, options, callback) {
        soap.createClient(wsdl, (err, client) => {
            if (err)
                throw err;
            client.setEndpoint(this.url);
            client[sender](options, (error, result) => {
                if (error)
                    throw error;
                callback(result);
            });
        });
    }
    HelloWorld(callback) {
        this.callToService('HelloWorld', {}, callback);
    }
    GetVersion(callback) {
        this.callToService('GetVersion', {}, callback);
    }
    OpenJob(job, script, callback) {
        this.OpenJobEx(job, script, callback);
    }
    OpenJobEx(job, script, callback) {
        this.callToService('OpenJob', { job, script }, callback);
    }
    BatchJob(job, script, callback) {
        this.BatchJobEx(job, script, callback);
    }
    BatchJobEx(job, script, callback) {
        this.callToService('BatchJobEx', { job, script }, callback);
    }
    RenewLease(jobID, expirationInSeconds, callback) {
        this.callToService('RenewLease', { jobID, expirationInSeconds }, callback);
    }
    Execute(jobID, script, callback) {
        this.ExecuteEx(jobID, script, callback);
    }
    ExecuteEx(jobID, script, callback) {
        this.callToService('ExecuteEx', { jobID, script }, callback);
    }
    CloseJob(jobID, callback) {
        this.callToService('CloseJob', { jobID }, callback);
    }
    GetExpiration(jobID, callback) {
        this.callToService('GetExpiration', { jobID }, callback);
    }
    Diag(type, jobID, callback) {
        this.DiagEx(type, jobID, callback);
    }
    DiagEx(type, jobID, callback) {
        this.callToService('DiagEx', { type, jobID }, callback);
    }
    GetStatus(callback) {
        this.callToService('GetStatus', {}, callback);
    }
    GetAllJobs(callback) {
        this.GetAllJobsEx(callback);
    }
    GetAllJobsEx(callback) {
        this.callToService('GetAllJobsEx', {}, callback);
    }
    CloseExpiredJobs(callback) {
        this.callToService('CloseExpiredJobs', {}, callback);
    }
    CloseAllJobs(callback) {
        this.callToService('CloseAllJobs', {}, callback);
    }
}
exports.default = RCCClient;
