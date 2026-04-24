
export class AppError extends Error {
    constructor(title, statusCode, details = null, metaData) {
        super(title);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = statusCode;
        this.details = details;
        this.meta = {
            timestamp: new Date().toISOString(), apiVersion: process.env.API_VERSION || '1.0.0',
        }

        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(title = 'Validation Failed', details = null) {
        super(title, 400, details);
    }
}
export class NotFoundError extends AppError {
    constructor(title = 'Todo not found', details = null) {
        super(title, 404, details);
    }
}

export class InternalServerError extends AppError {
    constructor(title = 'Internal server Failed', details = null) {
        super(title, 500, details);
    }
}

export class ConflictError extends AppError {
    constructor(title = 'Conflict Error', details = null) {
        super(title, 409, details);
    }
}

export class BadRequestError extends AppError {
    constructor(title = 'Bad request Error', details = null) {
        super(title, 400, details);
    }
}


