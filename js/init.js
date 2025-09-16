const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL =
  "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};


// mira si el usuario está logueado
const logged = localStorage.getItem("usuario");
if (!logged) {
  // lo envia a login si no
  window.location.href = "login.html";
} else {
  document.getElementById(
    "nickname"
    // muestra el nombre si está logueado
  ).innerHTML = `${logged}`;
}
//cierra la sesion
document.getElementById('cerrar').addEventListener('click', function (){
  localStorage.clear()
})

document.getElementById('themeSwitch').addEventListener('change', e => {
  value = document.getElementById('themeSwitch').value

console.log(value)
  switch(value){
    case "auto":
       localStorage.setItem('theme',value)
      break;
    case "light":
        localStorage.setItem('theme',value)
      break;
    case "dark":
       localStorage.setItem('theme',value)
       
      break;

  }

})


document.addEventListener('DOMContentLoaded',()=> {
  console.log(document.getElementById('themeSwitch'))
  document.getElementById('themeSwitch').value = localStorage.getItem('theme')
})