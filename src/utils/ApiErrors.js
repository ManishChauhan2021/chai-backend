class ApiError extends Error {
    constructor(
        statesCode,
        message = "Something went wrong",
        errors = [],
        stake = ""
        
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = errors

        if (stake){
            this.stack = stake
        }else{
            Error.captureStackTrace(this, this.construct)
        }
    }
}

export {ApiError}