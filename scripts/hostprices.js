const priceList = [48, 50, 39, 47, 69, 60];

let price = document.getElementsByClassName("cart-price");

for (let i = 0; i < price.length; i++) {
  price[i].innerText = priceList[i] + "$";
}
