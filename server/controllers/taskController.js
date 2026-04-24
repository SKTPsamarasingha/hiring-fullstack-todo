import {Task} from '../models/taskSchema.js';
import {NotFoundError} from "../middleware/appError.js";
import {asyncHandler} from "../middleware/handlers.js";

export const getAllTodos = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json(tasks);
});

export const createTodo = asyncHandler(async (req, res) => {
    const task = new Task(req.validatedBody);
    await task.save();
    res.status(201).json(task);
});


export const updateTodo = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.validatedParams.id,
        req.validatedBody,
        {new: true, runValidators: true}
    );

    if (!task) throw new NotFoundError("Task not found.");

    res.status(200).json(task);
});

export const setDoneStatus = asyncHandler(async (req, res) => {

    const task = await Task.findById(req.validatedParams.id);
    if (!task) throw new NotFoundError("Task not found.");

    task.done = !task.done;
    await task.save();

    res.status(200).json(task);
});

export const deleteTodo = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.validatedParams.id);

    if (!task) throw new NotFoundError("Task not found.");

    res.status(204).send();
});
