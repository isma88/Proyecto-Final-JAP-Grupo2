    const nombre =  document.getElementById('nombre')
    const apellido =  document.getElementById('apellido')
    const email =  document.getElementById('mail')
    const telefono =  document.getElementById('telefono')
    const user =   JSON.parse(localStorage.getItem('usuario'))

document.addEventListener('DOMContentLoaded',  () => {
    showInfo();

})

function showInfo() {
   
        nombre.value = user.nombre     
        apellido.value = user.apellido
        email.value = user.email
        telefono.value = user.telefono
}

function updateInfo() { 
    user.nombre =  nombre.value
    user.apellido = apellido.value
    user.telefono  = telefono.value
    localStorage.setItem('usuario', JSON.stringify(user))
}

document.getElementById('update').addEventListener('click', updateInfo)
    
const profileImage = document.getElementById("profile-image");
const fileInput = document.getElementById("file-input");

profileImage.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    profileImage.src = reader.result;
    localStorage.setItem("profileImage", reader.result);
  };
  reader.readAsDataURL(file);
});

profileImage.src = localStorage.getItem("profileImage") || profileImage.src;
