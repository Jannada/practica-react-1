//Configuraación para cuando el usuario entra por primera ez a nuestra app, esta tome el theme predeterminado del computador
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.body.classList.add("dark");
    localStorage.theme = "dark";
} else {
    document.body.classList.remove("dark");
    localStorage.theme = "light";
}

// Nota, debe estar arriba del APP porque debe leerlo primero
