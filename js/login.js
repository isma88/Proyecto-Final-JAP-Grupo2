document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contraseña").value.trim();
    let error = document.querySelector(".error-msg")

    if (esEmailValido(email) && (email !== "" || contrasena !== "") ) {
      usuario = {nombre: "", apellido: "", email: email, telefono: "", pfp: ""}
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "index.html";
    }else
      error.style.display = "block";
    }
  );

  
  function esEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}