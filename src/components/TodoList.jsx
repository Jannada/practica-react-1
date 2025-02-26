import { Droppable, Draggable } from "@hello-pangea/dnd";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todosId">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="mt-4 rounded-t-md bg-white dark:bg-slate-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    updateTodo={updateTodo}
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};
