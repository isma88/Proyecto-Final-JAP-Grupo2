document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let mail = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contraseña").value.trim();

    if (mail !== "" || contrasena !== "") {
      usuario = {nombre: "", apellido: "", mail: mail, telefono: "", pfp: ""}
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "index.html";
    }
  });
