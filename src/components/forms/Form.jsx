import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { MoonIcon } from "../icons/MoonIcon";

export const Form = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-left text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                            Todo
                        </h1>
                        <button>
                            <MoonIcon fill="#fff" />
                        </button>
                    </div>
                    <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md border-2 bg-white px-4 py-2">
                        <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300"></span>
                        <input
                            className="w-full text-gray-400 focus:outline-none"
                            type="text"
                            placeholder="create a new todo..."
                        />
                    </form>
                </header>
                <main className="px-auto container mx-auto mt-8 px-4">
                    <div className="rounded-md bg-white py-2 [&>article]:p-4">
                        <article className="flex items-center gap-4 border-b border-b-gray-200">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
                            <p className="grow text-gray-600">
                                Complete online JS curse
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <article className="flex items-center gap-4 border-b border-b-gray-200">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
                            <p className="grow text-gray-600">
                                Complete online JS curse
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>
                        <section className="flex justify-between px-4 py-4">
                            <span className="text-sm text-gray-400">
                                5 items left
                            </span>
                            <button className="text-sm text-gray-400">
                                Clear complete
                            </button>
                        </section>
                    </div>
                </main>
                <section className="container mx-auto mt-8 px-4">
                    <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                        <button className="text-blue-500">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Complete
                        </button>
                    </div>
                </section>
                <p className="mt-8 text-center text-gray-400">
                    Drag an drop to reorder list
                </p>
            </div>
        </div>
    );
};
