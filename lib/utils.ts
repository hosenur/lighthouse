export const getInterpreter = (interpreter: string) => {
    return interpreter.split('/').pop() || ""
}