import ScriptExecution from './ScriptExecution';
import Job from './Job';
declare class RCCClient {
    private url;
    constructor(ip: string, port: string);
    private callToService;
    HelloWorld(callback: (result: any) => void): void;
    GetVersion(callback: (result: any) => void): void;
    OpenJob(job: Job, script: ScriptExecution, callback: (result: any) => void): void;
    OpenJobEx(job: Job, script: ScriptExecution, callback: (result: any) => void): void;
    BatchJob(job: Job, script: ScriptExecution, callback: (result: any) => void): void;
    BatchJobEx(job: Job, script: ScriptExecution, callback: (result: any) => void): void;
    RenewLease(jobID: string, expirationInSeconds: number, callback: (result: any) => void): void;
    Execute(jobID: string, script: ScriptExecution, callback: (result: any) => void): void;
    ExecuteEx(jobID: string, script: ScriptExecution, callback: (result: any) => void): void;
    CloseJob(jobID: string, callback: (result: any) => void): void;
    GetExpiration(jobID: string, callback: (result: any) => void): void;
    Diag(type: string, jobID: string, callback: (result: any) => void): void;
    DiagEx(type: string, jobID: string, callback: (result: any) => void): void;
    GetStatus(callback: (result: any) => void): void;
    GetAllJobs(callback: (result: any) => void): void;
    GetAllJobsEx(callback: (result: any) => void): void;
    CloseExpiredJobs(callback: (result: any) => void): void;
    CloseAllJobs(callback: (result: any) => void): void;
}
export default RCCClient;
