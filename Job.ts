class Job {
    id: string;
    expirationInSeconds: number;
    category: number;
    cores: number;

    constructor(id: string, expirationInSeconds: number = 10, category: number = 0, cores: number = 1) {
        this.id = id;
        this.expirationInSeconds = expirationInSeconds;
        this.category = category;
        this.cores = cores;
    }
}

export default Job;