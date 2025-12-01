document.addEventListener("DOMContentLoaded", function () {
  detectLogin()//se asegura de que el usuario está logueado, si no lo envia al login, si está logueado carga su nombre en el menu
  document.getElementById("autos").addEventListener("click", function () {
    localStorage.setItem("catID", 101);
    window.location = "products.html";
  });
  document.getElementById("juguetes").addEventListener("click", function () {
    localStorage.setItem("catID", 102);
    window.location = "products.html";
  });
  document.getElementById("muebles").addEventListener("click", function () {
    localStorage.setItem("catID", 103);
    window.location = "products.html";
  });

  
});
