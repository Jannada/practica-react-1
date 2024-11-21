import { useState } from "react";

export const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setTitle(value);
        // console.log(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 overflow-hidden rounded-md border-2 bg-white px-4 py-2"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300"></span>
            <input
                className="w-full text-gray-400 focus:outline-none"
                type="text"
                placeholder="create a new todo..."
                value={title}
                onChange={handleChange}
            />
        </form>
    );
};
