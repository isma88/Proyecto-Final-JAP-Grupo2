
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contraseña").value.trim();
  let error = document.querySelector(".error-msg")

  if (esEmailValido(email) && (email !== "" || contrasena !== "")) {
    usuario = { nombre: "", apellido: "", email: email, telefono: "", pfp: "" }
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "index.html";
  } else
    error.style.display = "block";
}
);

//valida email
function esEmailValido(email) {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}