import { CrossIcon } from "./icons/CrossIcon";

export const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex items-center gap-4 border-b border-b-gray-200">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
            <p className="grow text-gray-600">{title}</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    );
};
