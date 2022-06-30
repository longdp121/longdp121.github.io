var cartProducts = [
  {
    id: 1,
    img: "./img/image_1.png",
    name: "Spiced Mint",
    price: 10,
    qty: 1,
  },
  {
    id: 2,
    img: "./img/image_2.png",
    name: "Sweet Straweberry",
    price: 20,
    qty: 1,
  },
  {
    id: 3,
    img: "./img/image_3.png",
    name: "Summer Cherries",
    price: 30,
    qty: 1,
  },
];

let modalCheckoutContent = document.getElementById("modalChecoutContent");
let totalFinalPrice = document.getElementById("total-price");
let htmls = "";

function renderModalContent(productList) {
  let totalPrice = 0;
  productList.forEach(function (product) {
    totalPrice += product.qty * product.price;
    htmls += `
        <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-6 product-img">
              <img src="${product.img}" alt="product-img">
            </div>
            <div class="col-6 product-info d-flex flex-column text-start">
              <h6>${product.name}</h6>
              <p>
                <button type="button" class="btn btn-link" id="remove_btn_${
                  product.id
                }" onclick="removeProduct()">Remove</button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4 text-start px-0">
              <p><b>$</b><b id="product_price_${product.id}">${
      product.price
    }</b></p>
            </div>
            <div class="col-4 d-flex justify-content-start px-o">
              <input class="width50" type="number" name="product_quantity" id="product_quantity_${
                product.id
              }" min="1" value="${product.qty}" onChange="changeQtyValue()">
            </div>
            <div class="col-4 text-start px-0">
              <p><b>$</b><b id="product_total_price_${product.id}">${
      product.price * product.qty
    }</b></p>
            </div>
          </div>
        </div>
      </div>
        `;
  });
  totalFinalPrice.innerText = totalPrice;
  modalCheckoutContent.innerHTML = htmls;
}

renderModalContent(cartProducts);

function changeQtyValue() {
  let updateQtyValue = event.target.value;
  let changedId = event.target.id.slice(17);
  let productPrice = parseFloat(
    document.getElementById(`product_price_${changedId}`).innerText
  );
  let updateTotalPrice = document.getElementById(
    `product_total_price_${changedId}`
  );
  updateTotalPrice.innerText = productPrice * updateQtyValue;

  let totalPrice = 0;
  cartProducts.forEach(function (product) {
    totalPrice += parseFloat(
      document.getElementById(`product_total_price_${product.id}`).innerText
    );
  });

  totalFinalPrice.innerText = totalPrice;
}

function removeProduct() {
  let removeProductId = event.target.id.slice(11);
  let updateCartProducts = cartProducts.filter(function (product) {
    return product.id != removeProductId;
  });

  cartProducts = updateCartProducts;
  modalCheckoutContent.innerHTML = "";
}

console.log(cartProducts);
