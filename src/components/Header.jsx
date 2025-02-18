import { useEffect, useState } from "react";
import { IconMoon } from "./icons/IconMoon";
import { IconSun } from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            // localStorage.theme = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex flex-row justify-between">
                <h1 className="text-left text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <IconSun fill="#fff" />
                    ) : (
                        <IconMoon fill="#fff" />
                    )}
                </button>
            </div>
        </header>
    );
};
