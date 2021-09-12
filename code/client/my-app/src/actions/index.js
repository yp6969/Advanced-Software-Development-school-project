export const logIn = () => {
    return {
        type: "LOG_IN"
    }
}
export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const incremented = (number) => {
    return {
        type: 'counter/incremented',
        payload: number
    }
}

export const decremented = (number) => {
    return {
        type: 'counter/decremented',
        payload: number
    }
}

export const account = (account) => {
    return {
        type: 'account',
        payload: account ? account : null
    }
}
