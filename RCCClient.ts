import * as soap from 'soap';
import Job from './Job'; // Assuming Job is defined in a separate file

const wsdl = require.resolve("@bloxrev/rccclient-node/RCCService.wsdl");

class RCCClient {
    url: string;

    constructor(ip: string, port: number) {
        this.url = `http://${ip}:${port}`;
    }

    private callToService(sender: string, options: object, callback: (result: any) => void): void {
        soap.createClient(wsdl, (err, client) => {
            if (err) {
                throw err;
            }
            client.setEndpoint(this.url);
            client[sender](options, (error: any, result: any) => {
                if (error) {
                    throw error;
                }
                callback(result);
            });
        });
    }

    HelloWorld(callback: (result: any) => void): void {
        this.callToService("HelloWorld", {}, callback);
    }

    GetVersion(callback: (result: any) => void): void {
        this.callToService("GetVersion", {}, callback);
    }

    GetStatus(callback: (result: any) => void): void {
        this.callToService("GetStatus", {}, callback);
    }

    OpenJob(job: Job, script: string | null = null, callback: (result: any) => void): void {
        const options = { job, script };
        this.callToService("OpenJob", options, callback);
    }

    CloseAllJobs(callback: (result: any) => void): void {
        this.callToService("CloseAllJobs", {}, callback);
    }

    Diag(callback: (result: any) => void): void {
        this.callToService("Diag", {}, callback);
    }

    DiagEx(callback: (result: any) => void): void {
        this.callToService("DiagEx", {}, callback);
    }

    GetAllJobs(callback: (result: any) => void): void {
        this.callToService("GetAllJobs", {}, callback);
    }

    GetAllJobsEx(callback: (result: any) => void): void {
        this.callToService("GetAllJobsEx", {}, callback);
    }

    CloseExpiredJobs(callback: (result: any) => void): void {
        this.callToService("CloseExpiredJobs", {}, callback);
    }
}

export default RCCClient;