import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SquarePlus, Search} from "lucide-react";


const createTodoSchema = z.object({
    title: z
        .string({
            required_error: 'Title is a required field.',
            invalid_type_error: 'Title must be a string.',
        })
        .min(3, 'The title should be at least 3 characters long.')
        .refine((val) => val.trim().length > 0, {
            message: 'Please provide a title for your todo.',
        }),

    description: z
        .string({
            invalid_type_error: 'Description must be a string of text.',
        })
        .optional()
        .or(z.literal('')),

    done: z
        .boolean({
            invalid_type_error: 'Status must be true or false.',
        })
        .default(false),
});


export const ToolBar = ({onAdd, onSearch}) => {
    const [search, setSearch] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(createTodoSchema)
    });

    const handleAdd = (data) => {
        onAdd({
            title: data.title,
            description: data.description || "",
            done: false
        });
        reset();
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    };

    return (
        <div className="w-full bg-navy border-b px-6 py-4">

            <div className="flex flex-col items-center gap-4">

                {/* TOP: ADD TASK */}
                <form
                    onSubmit={handleSubmit(handleAdd)}
                    className="flex items-center gap-2 bg-white/5 p-2 rounded-lg"
                >

                    <input
                        {...register("title")}
                        placeholder="Add new task..."
                        className="flex-1 px-3 py-2 rounded bg-white/10 text-white outline-none"
                    />

                    <input
                        {...register("description")}
                        placeholder="Description (optional)"
                        className="flex-1 px-3 py-2 rounded bg-white/10 text-white outline-none"
                    />

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                    >
                        Add
                    </button>
                </form>

                {errors.title && (
                    <p className="text-red-400 text-xs">
                        {errors.title.message}
                    </p>
                )}

                {/* BOTTOM: SEARCH */}
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                    <Search size={18} className="text-gray-400"/>

                    <input
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search tasks..."
                        className="flex-1 px-3 py-2 bg-transparent text-white outline-none"
                    />
                </div>

            </div>
        </div>
    );
};

export default ToolBar;