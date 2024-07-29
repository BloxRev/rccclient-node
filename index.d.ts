// index.d.ts

declare module '@bloxrev/rccclient-node' {
    import { Client } from 'soap';
  
    export class Job {
      // Define the properties and methods of the Job class here
    }
  
    export class ScriptExecution {
      // Define the properties and methods of the ScriptExecution class here
    }
  
    export class RCCClient {
      constructor(wsdlPath: string, options?: object);
      client: Client;
      HelloWorld(callback: (err: any, result: any) => void): void;
      GetVersion(callback: (err: any, result: any) => void): void;
      GetStatus(callback: (err: any, result: any) => void): void;
      OpenJob(job: Job, callback: (err: any, result: any) => void): void;
      CloseAllJobs(callback: (err: any, result: any) => void): void;
      Diag(callback: (err: any, result: any) => void): void;
      DiagEx(callback: (err: any, result: any) => void): void;
    }
  }