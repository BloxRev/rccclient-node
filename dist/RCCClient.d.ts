import Job from './Job';
declare class RCCClient {
    url: string;
    constructor(ip: string, port: number);
    private callToService;
    HelloWorld(callback: (result: any) => void): void;
    GetVersion(callback: (result: any) => void): void;
    GetStatus(callback: (result: any) => void): void;
    OpenJob(job: Job, script: string | null | undefined, callback: (result: any) => void): void;
    CloseAllJobs(callback: (result: any) => void): void;
    Diag(callback: (result: any) => void): void;
    DiagEx(callback: (result: any) => void): void;
    GetAllJobs(callback: (result: any) => void): void;
    GetAllJobsEx(callback: (result: any) => void): void;
    CloseExpiredJobs(callback: (result: any) => void): void;
}
export default RCCClient;
