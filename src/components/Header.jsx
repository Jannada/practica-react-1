import { MoonIcon } from "./icons/MoonIcon";

export const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex flex-row justify-between">
                <h1 className="text-left text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                    Todo
                </h1>
                <button>
                    <MoonIcon fill="#fff" />
                </button>
            </div>
        </header>
    );
};
