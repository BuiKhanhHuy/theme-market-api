class AppError extends Error {
    constructor(statusCode, message){
        super('App error')
        this.statusCode = statusCode
        this.details = [message];
    }
}

export default AppError