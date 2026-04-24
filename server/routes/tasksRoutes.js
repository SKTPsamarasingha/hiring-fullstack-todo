import express from 'express';
import * as taskController from '../controllers/taskController.js';
import {validateBody, validateParams} from '../middleware/validator.js';
import {createTodoSchema, updateTodoSchema, setDoneSchema, idParamSchema} from '../validation/tasksSchemas.js';

const tasksRoutes = express.Router();

tasksRoutes.get('/todos', taskController.getAllTodos);

tasksRoutes.post('/todos', validateBody(createTodoSchema), taskController.createTodo);

tasksRoutes.put('/todos/:id', validateParams(idParamSchema), validateBody(updateTodoSchema), taskController.updateTodo);

tasksRoutes.patch('/todos/:id/done', validateParams(idParamSchema), taskController.setDoneStatus);

tasksRoutes.delete('/todos/:id', validateParams(idParamSchema), taskController.deleteTodo);


export default tasksRoutes;
