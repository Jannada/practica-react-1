import { IconCross } from "./icons/IconCross";
import { IconCheck } from "./icons/IconCheck";
import Swal from "sweetalert2";
import React from "react";

export const TodoItem = React.forwardRef(
    ({ todo, deleteTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        const deleteConfirm = (id) => {
            Swal.fire({
                title: "Delete item",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteTodo(id);
                    Swal.fire("The item has been deleted", "", "success");
                }
            });
        };

        return (
            <article
                ref={ref}
                {...props}
                className="flex items-center gap-4 border-b border-b-gray-200 dark:border-slate-700"
            >
                <button
                    className={`inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300 dark:border-slate-700 ${completed && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}`}
                >
                    {completed && <IconCheck className="m-auto" />}
                </button>
                <p
                    onClick={() => updateTodo(id)}
                    className={`grow text-gray-600 dark:text-slate-400 ${completed && "line-through"}`}
                >
                    {title}
                </p>
                <button onClick={() => deleteConfirm(id)} className="flex-none">
                    <IconCross />
                </button>
            </article>
        );
    }
);
