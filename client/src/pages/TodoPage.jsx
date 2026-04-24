import {useEffect, useState} from "react";
import {taskService} from "../api/taskApi.js";
import ToolBar from "../components/ToolBar.jsx";
import Tasks from "../components/Tasks.jsx";
import {toast} from "react-toastify";

export const TodoPage = () => {
    const [tasks, setTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await taskService.getAllTasks();
                setTasks(data);
                setAllTasks(data);
            } catch (error) {
                console.error("Failed to fetch tasks:", error.response?.data || error.message);
            }
        }

        fetchTasks();
    }, []);

    const onDelete = async (id) => {
        try {
            await taskService.deleteTodo(id)
            setTasks(prev => prev.filter(task => task._id !== id));

            toast.info("Task delete successfully.");
        } catch (error) {
            console.error("Failed to delete task:", error.response?.data || error.message);
            toast.error("Failed to delete task",);

        }
    }
    const onToggleDone = async (id) => {
        try {
            await taskService.setDoneStatus(id)
            setTasks(prev =>
                prev.map(task =>
                    task._id === id
                        ? {...task, done: !task.done}
                        : task
                )
            );
            toast.info("Task done successfully.");

        } catch (error) {
            console.error("Failed to set done task:", error.response?.data || error.message);
            toast.error("Failed to set done task");

        }

    }
    const onEdit = async (id, data) => {
        try {
            const res = await taskService.updateTodo(id, data);


            setTasks(prev =>
                prev.map(task =>
                    task._id === id
                        ? (res ? res : {...task, ...data, updatedAt: new Date().toISOString()})
                        : task
                )
            );
            toast.info("Task updated successfully.");
        } catch (error) {
            console.error("Failed to edite task:", error.response?.data || error.message);
            toast.error("Failed to set edite task");

        }

    }
    const addTask = async (task) => {
        try {
            const newTask = await taskService.createTodo(task)
            setTasks(prev => [newTask, ...prev]);
            toast.info("Task added successfully.");
        } catch (error) {
            console.error("Failed to added task:", error.response?.data || error.message);
            toast.error("Failed to set added task");

        }
    };
    const searchTasks = (query) => {
        if (!query.trim()) {
            setTasks(allTasks);
            return;
        }

        const q = query.toLowerCase();

        setTasks(
            allTasks.filter(t =>
                t.title.toLowerCase().includes(q) ||
                t.description?.toLowerCase().includes(q)
            )
        );
    };

    return (<section>
        <ToolBar
            onAdd={addTask}
            onSearch={searchTasks}
        ></ToolBar>
        <Tasks
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            tasks={tasks}
        ></Tasks>
    </section>)
}

export default TodoPage
