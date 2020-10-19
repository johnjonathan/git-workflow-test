export const entrypoint = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Ok, we`re good',
        }),
    }
}

export const doRedirect = async () => {
    return {
        statusCode: 301,
        location: 'github.com',
    }
}
