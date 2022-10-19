let priceList = [48, 50, 39, 47, 69, 60];
let price = document.getElementsByClassName("cart-price");
let switchVal = document.querySelector(".switchValue").checked;

if (switchVal == true) {
  priceList = priceList.map(function (num) {
    return num * 7;
  });
}

function changePrice() {
  for (let i = 0; i < price.length; i++) {
    price[i].innerText = priceList[i];
  }
}
changePrice();
