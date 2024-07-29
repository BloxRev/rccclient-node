"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    constructor(id, expirationInSeconds = 10, category = 0, cores = 1) {
        this.id = id;
        this.expirationInSeconds = expirationInSeconds;
        this.category = category;
        this.cores = cores;
    }
}
exports.default = Job;
