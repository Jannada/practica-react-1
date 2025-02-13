import { TodoCreate } from "./components/TodoCreate";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoComputed } from "./TodoComputed";
import { TodoFilter } from "./TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id: 1, title: "Complete online course", completed: false },
    { id: 2, title: "Buy a new book", completed: false },
    { id: 3, title: "10 minutes meditation", completed: true },
    { id: 4, title: "Pick up BM´s package", completed: false },
    { id: 5, title: "Go to La Sirena", completed: true },
];
function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(), //es solo un id provicional, no se usa en un caso real (no se recomienda)
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id != id);
        setTodos(newTodo);
    };
    const clearComplete = () => {
        const newTodo = todos.filter((todo) => todo.completed === false);
        setTodos(newTodo);
    };

    const updateTodo = (id) => {
        // const newTodo = todos.map((todo) => {
        //     if (todo.id === id) {
        //         todo.completed = !todo.completed;
        //     }
        //     return todo;
        // });
        // setTodos(newTodo);

        //otra forma
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
    console.log(computedItemsLeft);

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-slate-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
                <TodoComputed
                    todos={todos}
                    computedItemsLeft={computedItemsLeft}
                    clearComplete={clearComplete}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="mt-8 text-center text-gray-400">
                Drag an drop to reorder list
            </footer>
        </div>
    );
}

export default App;
