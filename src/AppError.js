class AppError extends Error {
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
        this.details = [message];
    }
}

export default AppError