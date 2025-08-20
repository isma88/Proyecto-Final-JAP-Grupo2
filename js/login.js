document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contraseña").value.trim();

    if (usuario !== "" || contrasena !== "") {
        window.location.href = "index.html";
    }
});