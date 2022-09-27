// console.log("Assignment Discussion");
var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

var container = document.createElement("div");
container.classList.add("pdp-container");

document.body.append(container);

var previewImageContainer = document.createElement("div");
previewImageContainer.classList.add("preview-container");

var detailsContainer = document.createElement("div");
detailsContainer.classList.add("details-container");

container.append(previewImageContainer, detailsContainer);

var previewImg = document.createElement("img");
previewImg.classList.add("preview-img");
previewImg.src = productData.photos[0];
previewImageContainer.append(previewImg);

var productName = document.createElement("h1");
productName.innerText = productData.name;

var brand = document.createElement("h2");
brand.innerText = productData.brand;

var priceContainer = document.createElement("div");
priceContainer.classList.add("price-container");
priceContainer.innerText = "Price : Rs ";

var price = document.createElement("span");
price.classList.add("price-value");
price.innerText = productData.price;

priceContainer.append(price);

var descHeading = document.createElement("h3");
descHeading.innerText = "Description";

var descriptionText = document.createElement("p");
descriptionText.innerText = productData.description;

var productOverviewHeading = document.createElement("h3");
productOverviewHeading.innerText = "Product Overview";

var productImgContainer = document.createElement("div");
productImgContainer.classList.add("images-container");

var productImages = productData.photos;

for (var counter = 0; counter < productImages.length; counter++) {
  var productImg = document.createElement("img");
  productImg.classList.add("product-img");
  productImg.src = productImages[counter];
  productImg.addEventListener("click", onProductImgClick);

  productImgContainer.append(productImg);
}

var atcBtn = document.createElement("button");
atcBtn.innerText = "Add to Cart";
atcBtn.addEventListener('click',onAddToCart);

var miniCart = document.createElement('span');
miniCart.innerText = 0;

detailsContainer.append(
  productName,
  brand,
  priceContainer,
  descHeading,
  descriptionText,
  productOverviewHeading,
  productImgContainer,
  atcBtn,
  miniCart
);

productImgContainer.childNodes[0].classList.add("active");

function onProductImgClick(e) {
  previewImg.src = e.target.src;

  var images = productImgContainer.childNodes;
  for (var counter = 0; counter < images.length; counter++) {
    images[counter].classList.remove("active");
  }

  e.target.classList.add("active");
}

var itemsInCart = 0;
function onAddToCart() {
    itemsInCart++;
    miniCart.innerText = itemsInCart;
}
