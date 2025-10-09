document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contraseña").value.trim();

    if (esEmailValido(email) && (email !== "" || contrasena !== "") ) {
      usuario = {nombre: "", apellido: "", email: email, telefono: "", pfp: ""}
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "index.html";
    }
  });

  
  function esEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}