import { TodoCreate } from "./components/TodoCreate";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoComputed } from "./TodoComputed";
import { TodoFilter } from "./TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id: 1, title: "Complete online course", completed: true },
    { id: 2, title: "Buy a new book", completed: false },
    { id: 3, title: "10 minutes meditation", completed: true },
    { id: 4, title: "Pick up BM´s package", completed: false },
    { id: 5, title: "Go to La Sirena", completed: true },
];
function App() {
    const [todo, setTodo] = useState(initialStateTodos);
    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="px-auto container mx-auto mt-8 px-4">
                <TodoCreate />
                <TodoList todos={todo} />
                <TodoComputed />
                <TodoFilter />
            </main>
            <footer className="mt-8 text-center text-gray-400">
                Drag an drop to reorder list
            </footer>
        </div>
    );
}

export default App;
