class ValidationError extends Error {
    constructor(errors){
        super("Validation error")
        this.details = errors
    }
}

export default ValidationError