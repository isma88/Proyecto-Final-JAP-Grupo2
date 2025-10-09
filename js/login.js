document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contraseña").value.trim();

    if (email !== "" || contrasena !== "") {
      usuario = {nombre: "", apellido: "", email: email, telefono: "", pfp: ""}
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "index.html";
    }
  });
