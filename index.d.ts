// index.d.ts

declare module '@bloxrev/rccclient-node' {
  import { Client } from 'soap';

  /**
   * Represents a job
   */
  export class Job {
    /**
     * @constructor
     * @param {string} id - The unique identifier for the job.
     * @param {number} expirationInSeconds - The expiration time in seconds.
     * @param {number} category - The category of the job.
     * @param {number} cores - The number of cores allocated to the job.
     */
    constructor(id: string, expirationInSeconds?: number, category?: number, cores?: number);

    id: string;
    expirationInSeconds: number;
    category: number;
    cores: number;
}

  /**
   * Represents a script execution
   */
  export class ScriptExecution {
      /**
       * @constructor
       * @param {string} name - The name of the script.
       * @param {string} script - The script to execute.
       * @param {Array} args - The arguments to pass.
       */
      constructor(name: string, script: string, args: any[]);

      name: string;
      script: string;
      arguments: any[];
  }

  /**
   * Represents the RCC Client
   */
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
      GetAllJobs(callback: (result: any) => void): void;
      GetAllJobsEx(callback: (result: any) => void): void;
      CloseExpiredJobs(callback: (result: any) => void): void;
  }
}