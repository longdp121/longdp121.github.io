let products = [
  {
    product_id: 1,
    img: "./img/image_1.png",
    name: "Product 1",
    price: 10
  },
  {
    product_id: 2,
    img: "./img/image_2.png",
    name: "Product 2",
    price: 10
  },
  {
    product_id: 3,
    img: "./img/image_3.png",
    name: "Product 3",
    price: 10
  },
  {
    product_id: 4,
    img: "./img/image_1.png",
    name: "Product 4",
    price: 10
  },
  {
    product_id: 5,
    img: "./img/image_2.png",
    name: "Product 5",
    price: 10
  },
  {
    product_id: 6,
    img: "./img/image_3.png",
    name: "Product 6",
    price: 10
  },
  {
    product_id: 7,
    img: "./img/image_1.png",
    name: "Product 7",
    price: 10
  },
  {
    product_id: 8,
    img: "./img/image_2.png",
    name: "Product 8",
    price: 10
  },

];

let cartProducts = [
  {
    id: 1,
    product_id: 1,
    img: "./img/image_1.png",
    name: "Product 1",
    price: 10,
    qty: 1,
  },
  {
    id: 2,
    product_id: 2,
    img: "./img/image_2.png",
    name: "Product 2",
    price: 10,
    qty: 1,
  },
  {
    id: 3,
    product_id: 3,
    img: "./img/image_3.png",
    name: "Product 3",
    price: 10,
    qty: 1,
  },
];

// var cartProducts
let productsContent = document.getElementById("products-content")
let modalCheckoutContent = document.getElementById("modalChecoutContent");
let totalFinalPrice = document.getElementById("total-price");
let cart = document.getElementById("cart");
let htmls = "";

function updateData(myList, id, value) {
  for (obj of myList) {
    if (obj.id == id) {
      obj.qty = value;
    }
  }
}

// updateData(cartProducts, 3, 1000)

// console.log(cartProducts)

function renderProductsContent() {
  let html = "";
  products.forEach(function (product) {
    html += `
    <div class="card border-0 col-lg-3 col-md-3 col-sm-6 col-sx-12">
    <img src=${product.img} alt="" class="card-img-top" />
    <div class="card-body d-flex flex-column justify-content-start">
      <p class="card-title">${product.name}</p>
      <div class="price-content d-flex justify-content-between">
        <button type="button" class="btn btn-success" id="product_id_${product.product_id}" onclick="addToCart(event)">Add to cart</button>
        <p>${product.price}$</p>
      </div>
    </div>
  </div>
    `
  })
  productsContent.innerHTML = html;
}

renderProductsContent()

function renderCartBadget(num) {
  cart.innerHTML = '<i class="ti-shopping-cart"></i>';
  if (num > 0) {
    console.log("num or totalQty: ", num)
    cart.innerHTML = `
        <i class="ti-shopping-cart"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${num}
            <span class="visually-hidden">unread messages</span>
        </span>
        `;
  }
}

function renderModalContent(productList) {
  let totalPrice = 0;
  let totalQty = 0;
  productList.forEach(function (product) {
    totalPrice += product.qty * product.price;
    totalQty += product.qty;
    htmls += `
        <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-6 product-img">
              <img src=${product.img} alt="product-img">
            </div>
            <div class="col-6 product-info d-flex flex-column text-start">
              <h6>${product.name}</h6>
              <p>
                <button type="button" class="btn btn-link" id="remove_btn_${product.id}" onclick="removeProduct()">Remove</button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4 text-start px-0">
              <p><b>$</b><b id="product_price_${product.id}">${product.price}</b></p>
            </div>
            <div class="col-4 d-flex justify-content-start px-o">
              <input class="width50" type="number" name="product_quantity" id="product_quantity_${product.id}" min="0" value="${product.qty}" onChange="changeQtyValue(event)">
            </div>
            <div class="col-4 text-start px-0">
              <p><b>$</b><b id="product_total_price_${product.id}">${product.price * product.qty}</b></p>
            </div>
          </div>
        </div>
      </div>
        `;
  });
  totalFinalPrice.innerText = totalPrice;
  modalCheckoutContent.innerHTML = htmls;
  renderCartBadget(totalQty);
}

renderModalContent(cartProducts);

function addToCart(event) {
  let addedProductId = event.target.id.slice(11);
  console.log(addedProductId)
  cart.show()
}

function changeQtyValue(event) {
  let updateQtyValue = event.target.value;
  console.log("value", updateQtyValue)
  let changedId = event.target.id.slice(17);
  console.log(changedId);
  let productPrice = parseFloat(
    document.getElementById(`product_price_${changedId}`).innerText
  );
  let updateTotalPrice = document.getElementById(
    `product_total_price_${changedId}`
  );
  updateTotalPrice.innerText = productPrice * updateQtyValue;

  let totalPrice = 0;
  let totalQty = 0;
  cartProducts.forEach(function (product) {
    totalPrice += parseFloat(
      document.getElementById(`product_total_price_${product.id}`).innerText
    );
    totalQty += parseInt(
      document.getElementById(`product_quantity_${product.id}`).value
    );
  });
  totalFinalPrice.innerText = totalPrice;
  renderCartBadget(totalQty);
  updateData(cartProducts, changedId, updateQtyValue)
  console.log(cartProducts);

}

// function removeProduct() {
//     let removeProductId = event.target.id.slice(11);
//     let updateCartProducts = cartProducts.filter(function (product) {
//         return product.id != removeProductId;
//     });

//     cartProducts = updateCartProducts;
//     modalCheckoutContent.innerHTML = "";
// }