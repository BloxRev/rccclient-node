import * as soap from 'soap';
import { resolve } from 'path';
import ScriptExecution from './ScriptExecution';
import Job from './Job';

const wsdl = resolve('./node_modules/@bloxrev/rccclient-node/RCCService.wsdl');

class RCCClient {
    private url: string;

    constructor(ip: string, port: string) {
        this.url = `http://${ip}:${port}`;
    }

    private callToService(sender: string, options: object, callback: (result: any) => void) {
        soap.createClient(wsdl, (err: any, client: any) => {
            if (err) throw err;
            client.setEndpoint(this.url);
            client[sender](options, (error: any, result: any) => {
                if (error) throw error;
                callback(result);
            });
        });
    }

    public HelloWorld(callback: (result: any) => void) {
        this.callToService('HelloWorld', {}, callback);
    }

    public GetVersion(callback: (result: any) => void) {
        this.callToService('GetVersion', {}, callback);
    }

    public OpenJob(job: Job, script: ScriptExecution, callback: (result: any) => void) {
        this.OpenJobEx(job, script, callback);
    }

    public OpenJobEx(job: Job, script: ScriptExecution, callback: (result: any) => void) {
        this.callToService('OpenJob', { job, script }, callback);
    }

    public BatchJob(job: Job, script: ScriptExecution, callback: (result: any) => void) {
        this.BatchJobEx(job, script, callback);
    }

    public BatchJobEx(job: Job, script: ScriptExecution, callback: (result: any) => void) {
        this.callToService('BatchJobEx', { job, script }, callback);
    }

    public RenewLease(jobID: string, expirationInSeconds: number, callback: (result: any) => void) {
        this.callToService('RenewLease', { jobID, expirationInSeconds }, callback);
    }

    public Execute(jobID: string, script: ScriptExecution, callback: (result: any) => void) {
        this.ExecuteEx(jobID, script, callback);
    }

    public ExecuteEx(jobID: string, script: ScriptExecution, callback: (result: any) => void) {
        this.callToService('ExecuteEx', { jobID, script }, callback);
    }

    public CloseJob(jobID: string, callback: (result: any) => void) {
        this.callToService('CloseJob', { jobID }, callback);
    }

    public GetExpiration(jobID: string, callback: (result: any) => void) {
        this.callToService('GetExpiration', { jobID }, callback);
    }

    public Diag(type: string, jobID: string, callback: (result: any) => void) {
        this.DiagEx(type, jobID, callback);
    }

    public DiagEx(type: string, jobID: string, callback: (result: any) => void) {
        this.callToService('DiagEx', { type, jobID }, callback);
    }

    public GetStatus(callback: (result: any) => void) {
        this.callToService('GetStatus', {}, callback);
    }

    public GetAllJobs(callback: (result: any) => void) {
        this.GetAllJobsEx(callback);
    }

    public GetAllJobsEx(callback: (result: any) => void) {
        this.callToService('GetAllJobsEx', {}, callback);
    }

    public CloseExpiredJobs(callback: (result: any) => void) {
        this.callToService('CloseExpiredJobs', {}, callback);
    }

    public CloseAllJobs(callback: (result: any) => void) {
        this.callToService('CloseAllJobs', {}, callback);
    }
}

export default RCCClient;
