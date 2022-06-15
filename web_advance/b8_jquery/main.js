let inputScore = $("#score");
let btn = $("#btn");
let resultTag = $("#result");

btn.on("click", function () {
  let score = inputScore.val();
  if (score >= 6 && score <= 8) {
    resultTag.html(`<p style="color: green">Gioi</p>`);
  } else if (score >= 4 && score < 6) {
    resultTag.html(`<p style="color: yellow">Dat</p>`);
  } else if (score < 4) {
    resultTag.html(`<p style="color: red">Khong dat</p>`);
  } else {
    resultTag.text("Invalid");
  }
});

const products = [
  { id: 1, name: "p1", price: 50, qty: 1 },
  { id: 2, name: "p2", price: 60, qty: 2 },
  { id: 3, name: "p3", price: 35, qty: 3 },
];

let sum = products.reduce(function (prev, cur) {
  return prev + cur.price;
}, 0);

// console.log(sum)

let tablePrice = $("#table-price");
let sumBtn = $("#sum-btn");

products.forEach(function (item) {
  let trTag = document.createElement("tr");
  for (let i in item) {
    let tdTag = document.createElement("td");
    tdTag.innerText = item[i];
    trTag.append(tdTag);
  }
  tablePrice.append(trTag);
});

sumBtn.on("click", function () {
  if ($("tr").length === products.length + 1) {
    let sum = products.reduce(function (total, product) {
      return total + product.price * product.qty;
    }, 0);
    tablePrice.append(`<tr><td>${sum}</td></tr>`);
  } else {
  }
});
