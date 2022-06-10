const cities = {
  "Ha Noi": {
    "Ba Dinh": ["Ngoc Ha", "Doi Can", "Lieu Giai"],
    "Hoan Kiem": ["Hang Bong", "Hang Bac", "Hang Dong"],
    "Hai Ba Trung": ["Ba Trieu", "To Hien Thanh", "Minh Khai"],
  },
  "Da Nang": {
    "Lien Trieu": ["P1", "P2", "P3"],
    "Hong Bang": ["P4", "P5", "P6"],
    "Hai Chau": ["P7", "P8", "P9"],
  },
  "Ho Chi Minh": {
    "Quan 1": ["P1", "P2", "P3", "P4"],
    "Quan 2": ["P5", "P6", "P7", "P8", "P9"],
  },
};

let citiesSelectTag = document.getElementById("cities");
let districsSelectTag = document.getElementById("districs");
let wardsSelectTag = document.getElementById("wards");
let searchBtn = document.getElementById("search-btn");
let resultTag = document.getElementById("result");

for (let city in cities) {
  let cityOptionTag = document.createElement("option");
  cityOptionTag.innerText = city;
  cityOptionTag.value = city;
  citiesSelectTag.append(cityOptionTag);
}

citiesSelectTag.onchange = function (event) {
  let selectedCity = event.target.value;
  districsSelectTag.innerHTML = "";
  wardsSelectTag.innerHTML = "";
  for (let distric in cities[selectedCity]) {
    let districOptionTag = document.createElement("option");
    districOptionTag.innerText = distric;
    districOptionTag.value = distric;
    districsSelectTag.append(districOptionTag);
  }
};

districsSelectTag.onchange = function (event) {
  let selectedDistric = event.target.value;
  wardsSelectTag.innerHTML = "";
  for (let ward of cities[citiesSelectTag.value][selectedDistric]) {
    let wardOptionTag = document.createElement("option");
    wardOptionTag.innerText = ward;
    wardOptionTag.value = ward;
    wardsSelectTag.append(wardOptionTag);
  }
};

searchBtn.onclick = function () {
  let citiValue = citiesSelectTag.value;
  let districValue = districsSelectTag.value;
  let wardValue = wardsSelectTag.value;
  if (citiValue != "" && districValue != "" && wardValue != "") {
    resultTag.innerText = `Thanh pho: ${citiValue}. Quan: ${districValue}. Phuong: ${wardValue}`;
  } else {

  }
};
