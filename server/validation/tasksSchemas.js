import Joi from 'joi';

export const idParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required().messages({
        'string.hex': 'The ID must be a valid hex string.',
        'string.length': 'The ID must be exactly 24 characters long.',
        'any.required': 'An ID is required to perform this action.'
    })
});

export const createTodoSchema = Joi.object({
    title: Joi.string().required().min(3).messages({
        'string.empty': 'Please provide a title for your todo.',
        'string.min': 'The title should be at least 3 characters long.',
        'any.required': 'Title is a required field.'
    }),
    description: Joi.string().optional().allow('').messages({
        'string.base': 'Description must be a string of text.'
    }),
    done: Joi.boolean().default(false).messages({
        'boolean.base': 'Status must be true or false.'
    })
});

export const updateTodoSchema = Joi.object({
    title: Joi.string().min(3).messages({
        'string.min': 'The new title must be at least 3 characters long.'
    }),
    description: Joi.string().allow('').messages({
        'string.base': 'Description must be a string of text.'
    }),
    done: Joi.boolean().messages({
        'boolean.base': 'Status must be true or false.'
    })
}).min(1).messages({
    'object.min': 'Please provide at least one field to update (title, description, or done).'
});

export const setDoneSchema = Joi.object({
    done: Joi.boolean().required().messages({
        'boolean.base': 'You must provide a true or false value for the done status.',
        'any.required': 'The "done" field is missing.'
    })
});
