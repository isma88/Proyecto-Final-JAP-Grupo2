document.addEventListener("DOMContentLoaded", () => {
  const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/50922.json"
 
  fetch(PRODUCT_INFO_URL)
    .then(response => response.json())
    .then(data => {
     
      document.getElementById("product-name").textContent = data.name;
      document.getElementById("product-price").textContent = `${data.currency} ${data.cost}`;
      document.getElementById("product-category").textContent = data.category;
      document.getElementById("product-sold").textContent = data.soldCount;
      document.getElementById("product-description").textContent = data.description;

   
      const carouselInner = document.querySelector("#carCarousel .carousel-inner");
      carouselInner.innerHTML = ""; 

      data.images.forEach((imgSrc, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("d-block", "w-100");
        img.alt = `Imagen ${index + 1}`;

        item.appendChild(img);
        carouselInner.appendChild(item);
      });
    })
    .catch(err => console.error(err));
});