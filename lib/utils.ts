export const getImage = (image: string) => {
    switch (image) {
        case 'node':
            return '/assets/nodejs.svg'
    }
}
export const getInterpreter = (interpreter: string) => {
    return interpreter.split('/').pop()
}