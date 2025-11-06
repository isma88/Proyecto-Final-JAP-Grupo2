    const nombre =  document.getElementById('nombre');
    const apellido =  document.getElementById('apellido');
    const email =  document.getElementById('mail');
    const telefono =  document.getElementById('telefono');
    const LocalStorageUser =   JSON.parse(localStorage.getItem('usuario'));
    const profileImage = document.getElementById("profile-image");
    const imageBack = document.querySelector('.image-back');
    const fileInput = document.getElementById("file-input");

    document.getElementById('update').addEventListener('click', updateInfo);
    imageBack.addEventListener("click", () => fileInput.click());

document.addEventListener('DOMContentLoaded',  () => {
    showInfo();
    profileImage.src = LocalStorageUser.pfp || profileImage.src; // al cargar la pagina carga la imagen de perfil o la imagen default en caso de no tener
})

function showInfo() {
   
        nombre.value = LocalStorageUser.nombre     
        apellido.value = LocalStorageUser.apellido
        email.value = LocalStorageUser.email
        telefono.value = LocalStorageUser.telefono
}

function updateInfo() { 
    LocalStorageUser.nombre =  nombre.value
    LocalStorageUser.apellido = apellido.value
    LocalStorageUser.telefono  = telefono.value
    localStorage.setItem('usuario', JSON.stringify(LocalStorageUser))
}

    
//permite cargar una nueva imagen de perfil
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    profileImage.src = reader.result;
    LocalStorageUser.pfp = reader.result
   updateInfo();
  };
  reader.readAsDataURL(file);
});


