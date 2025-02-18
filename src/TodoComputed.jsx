import Swal from "sweetalert2";
export const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
    const confirmclearComplete = () => {
        Swal.fire({
            title: "¿Delete all completed to-dos?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                clearComplete();
                Swal.fire("The to-dos have been deleted", "", "success");
            }
        });
    };
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-slate-800">
            <span className="text-sm text-gray-400 dark:text-slate-400">
                {computedItemsLeft} items left
            </span>
            <button
                onClick={() => confirmclearComplete()}
                className="text-sm text-gray-400 dark:text-slate-400"
            >
                Clear completed
            </button>
        </section>
    );
};
