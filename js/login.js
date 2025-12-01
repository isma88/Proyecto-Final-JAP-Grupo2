
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contraseña").value.trim();
  let error = document.querySelector(".error-msg")
  
  if (validEmail(email) && (email !== "" || contrasena !== "")) { // Valida los campos
    usuario = { nombre: "", apellido: "", email: email, telefono: "", pfp: "", token: ""} // Crea el objeto usuario con sus propiedades
      localStorage.setItem("usuario", JSON.stringify(usuario)); // Guarda el usuario en el localStorage
    getJSONData(LOGIN, "POST").then(function (result) { // Solicita el token
       if(result.status === "ok") { 
         usuario.token = result.data.token // Guarda el token en el objeto usuario
         localStorage.setItem("usuario", JSON.stringify(usuario)); 
         window.location.href = "index.html";
       }else {
        return false
       }
     })
    
    
  } else
    error.style.display = "block";
}
);

// Valida si el mail tiene formato valido
function validEmail(email) {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}