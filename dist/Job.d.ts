declare class Job {
    id: string;
    expirationInSeconds: number;
    category: number;
    cores: number;
    constructor(id: string, expirationInSeconds?: number, category?: number, cores?: number);
}
export default Job;
