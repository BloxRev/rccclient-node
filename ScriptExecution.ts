class ScriptExecution {
    name: string
    script: string
    arguments: string[]

    constructor(name: string, script: string, args: string[]) {
        this.name = name;
        this.script = script;
        this.arguments = args;
    }
}

export default ScriptExecution