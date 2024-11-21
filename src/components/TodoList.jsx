import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    updateTodo={updateTodo}
                    todo={todo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};
