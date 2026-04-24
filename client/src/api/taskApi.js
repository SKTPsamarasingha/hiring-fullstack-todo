import {API_INSTANCE} from "../configs/axios.js";

export const taskService = {
    getAllTasks: () => API_INSTANCE.get("/todos"),

    createTodo: (data) => API_INSTANCE.post("/todos", data),

    updateTodo: (id, data) => API_INSTANCE.put(`/todos/${id}`, data),

    setDoneStatus: (id) => API_INSTANCE.patch(`/todos/${id}/done`),

    deleteTodo: (id) => API_INSTANCE.delete(`/todos/${id}`),
};
