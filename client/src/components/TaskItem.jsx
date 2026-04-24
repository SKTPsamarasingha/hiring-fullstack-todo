import {useState} from "react";
import {Trash, Pencil, Check, SquarePlus} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

const TaskItem = ({task, onDelete, onToggleDone, onEdit}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [form, setForm] = useState({
        title: task.title,
        description: task.description
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSave = () => {
        if (!form.title.trim()) return;
        onEdit(task._id, form);
        setIsEditing(false);
    };

    return (
        <motion.div layout className=" rounded-lg p-4 bg-white shadow-sm">

            {/* Top row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">

                    {/* Toggle */}
                    <button onClick={() => setShowDetails(prev => !prev)}>
                        <SquarePlus className={`text-pink`} size={18}/>
                    </button>

                    {/* Title */}
                    {isEditing ? (
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className=" px-2 py-1 rounded w-60"
                        />
                    ) : (
                        <h1 className={`font-medium ${task.done ? "line-through text-gray-400" : ""}`}>
                            {task.title}
                        </h1>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className={'cursor-pointer'} onClick={() => onToggleDone(task._id)}>
                        <Check className={task.done ? 'text-green-500' : 'text-blue-500'}
                               size={18}/>
                    </button>

                    <button className={'cursor-pointer'} onClick={() => setIsEditing(prev => !prev)}>
                        <Pencil className={'text-green-500'}
                                size={18}/>
                    </button>

                    <button className={'cursor-pointer'} onClick={() => onDelete(task._id)}>
                        <Trash className={'text-red-500'} size={18}/>
                    </button>
                </div>
            </div>

            {/* Details */}
            <AnimatePresence initial={false}>
                {(showDetails || isEditing) && (
                    <motion.div
                        key="details"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.25}}
                        className="overflow-hidden"
                    >
                        <div className="mt-3 text-sm text-gray-600">

                            {/* Description */}
                            {isEditing ? (
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className=" w-full px-2 py-1 rounded"
                                    rows={3}
                                />
                            ) : (
                                <p>{task.description}</p>
                            )}

                            {/* Save */}
                            {isEditing && (
                                <button
                                    onClick={handleSave}
                                    className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default TaskItem;