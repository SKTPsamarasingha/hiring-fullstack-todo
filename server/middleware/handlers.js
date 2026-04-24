import {AppError} from "./appError.js";
import {logger} from "../utils/logger.js";
import {v4 as uuidv4} from 'uuid';
import {NODE_ENV} from "../configs/configs.js";

const errorHandler = (error, req, res, next) => {
    const isDev = NODE_ENV === 'development';

    logger.error({
        requestId: req.requestId,
        err: {
            message: error.message,
            stack: error.stack,
            name: error.name
        },
        method: req.method,
        path: req.originalUrl
    }, "An error occurred");

    if (error instanceof AppError) {
        const {meta, ...errors} = error;
        return res.status(error.statusCode).json({
            success: false,
            errors,
            meta: meta,
        });
    }

    return res.status(500).json({
        success: false,
        error: {
            name: error.name,
            message: isDev ? error.message : 'Internal server error',
            ...(isDev && {stack: error.stack}),
        }
    });
}


const requestHandler = (req, res, next) => {
    req.requestId = uuidv4();

    logger.info(
        {
            requestId: req.requestId,
            method: req.method,
            path: req.originalUrl,
            ip: req.ip,
        },
        "Incoming request"
    );

    next();
}

const asyncHandler = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
};

export {errorHandler, requestHandler, asyncHandler};