
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contraseña").value.trim();
  let error = document.querySelector(".error-msg")

  if (validEmail(email) && (email !== "" || contrasena !== "")) {
    usuario = { nombre: "", apellido: "", email: email, telefono: "", pfp: "", token: ""}
      localStorage.setItem("usuario", JSON.stringify(usuario));
    getJSONData(LOGIN, "POST").then(function (result) { 
       if(result.status === "ok") { 
         console.log(result.data)
         usuario.token = result.data.token
         localStorage.setItem("usuario", JSON.stringify(usuario));
         window.location.href = "index.html";
       }else {
        console.log(result.status)
       }
     })
    
    
  } else
    error.style.display = "block";
}
);

//valida email
function validEmail(email) {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}