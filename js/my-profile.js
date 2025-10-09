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


