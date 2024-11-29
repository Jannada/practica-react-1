export const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-slate-800">
                <button
                    onClick={() => changeFilter("all")}
                    className={`hover:text-blue-500 ${filter === "all" ? "text-blue-500 dark:text-blue-500" : "text-gray-400 dark:text-slate-400"} `}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter("active")}
                    className={`hover:text-blue-500 ${filter === "active" ? "text-blue-500 dark:text-blue-500" : "text-gray-400 dark:text-slate-400"} `}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={`hover:text-blue-500 ${filter === "completed" ? "text-blue-500 dark:text-blue-500" : "text-gray-400 dark:text-slate-400"} `}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
