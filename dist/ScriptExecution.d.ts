declare class ScriptExecution {
    name: string;
    script: string;
    arguments: string[];
    constructor(name: string, script: string, args: string[]);
}
export default ScriptExecution;
