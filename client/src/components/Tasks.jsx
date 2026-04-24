import TaskItem from "./TaskItem.jsx";
import {motion} from "framer-motion";

export const Tasks = ({tasks, onDelete, onToggleDone, onEdit}) => {
    return (<div className=" w-full min-h-screen flex items-start justify-center py-6">
        <motion.div
            layout
            className=" w-[50rem] p-4 space-y-3"
        >

            {tasks?.map((task) => (<TaskItem
                key={task._id}
                task={task}
                onDelete={onDelete}
                onToggleDone={onToggleDone}
                onEdit={onEdit}
            />))}
        </motion.div>
    </div>);
};

export default Tasks;