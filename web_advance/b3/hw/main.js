//Cho một mảng chứa tên các loại quả, thêm một thẻ <li> tương ứng với mỗi loại quả vào thẻ <ul>

const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

function renderHtmls(myList) {
  let html = "";
  for (item of myList) {
    html += `<li>${item}</li>`;
  }
  return html;
}

// function renderHtmls(myList) {
//   for (item of myList) {
//   }
// }

let htmlAddList = document.querySelector(".fruit-list");

let content = renderHtmls(fruitList);

htmlAddList.innerHTML = content;

//Thêm một ảnh avatar vào trong thẻ <div>, sử dụng class để style cho hình ảnh

const avatarSrc = "./logo_v8.png";

let htmlAddAvatar = document.querySelector(".avatar-box");

let imgTag = document.createElement("img");

imgTag.src = avatarSrc;
imgTag.className = "avatar";
imgTag.style = "width: 150px";

// htmlAddAvatar.appendChild(imgTag);
htmlAddAvatar.append(imgTag);

// console.log(htmlAddAvatar.children)

//Thay đổi nội dung tất cả thẻ <li> ở vị trí đầu tiên và cuối cùng trong tất cả các thẻ <ul> tương ứng thành first và last

let htmlUls = document.querySelector(".ul-list").children;

// console.log(htmlUls);

for (const ul of htmlUls) {
  let firstItem = ul.firstElementChild;
  let lastItem = ul.lastElementChild;

  firstItem.innerText = "First";
  lastItem.innerText = "Last";
}

const box = document.querySelector(".box");

// let width = 100;
// function expand() {
//   width += 10;
//   box.style.width = width + "px";
// }

// setInterval(expand, 1000)

//Tao dong ho
const clock = document.querySelector(".clock");

function currentTime() {
  const time = new Date();
  return time.toLocaleString();
}

function showTime() {
  clock.innerText = currentTime();
}

setInterval(showTime, 1000)

//Render a select menu

const cities = [
  {
    id: 1,
    locate: "vi",
    name: "Hanoi",
  },
  {
    id: 2,
    locate: "us",
    name: "New York",
  },
  {
    id: 3,
    locate: "JP",
    name: "Tokyo",
  },
  {
    id: 4,
    locate: "China",
    name: "Hello",
  },
];

const selectMenu = document.querySelector("select");

function creatOption(item) {
  const selectTag = document.createElement("option");
  selectTag.innerText = item.name;
  selectTag.value = item.locate;

  return selectTag;
}

function render(myList) {
  for (let item of myList) {
    let option = creatOption(item);

    selectMenu.append(option);
  }
}

render(cities);
