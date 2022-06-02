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
  let html = "<ul>";
  for (item of myList) {
    html += `<li>${item}</li>`;
  }
  return (html += "</ul>");
}

let htmlAddList = document.body.querySelector(".fruit-list");

let content = renderHtmls(fruitList);

htmlAddList.innerHTML = content;

//Thêm một ảnh avatar vào trong thẻ <div>, sử dụng class để style cho hình ảnh

const avatarSrc = "./logo_v8.png";

let htmlAddAvatar = document.querySelector(".avatar-box");

let imgTag = document.createElement("img");

imgTag.src = avatarSrc;
imgTag.className = "avatar";
imgTag.style = "width: 150px";

htmlAddAvatar.appendChild(imgTag);

//Thay đổi nội dung tất cả thẻ <li> ở vị trí đầu tiên và cuối cùng trong tất cả các thẻ <ul> tương ứng thành first và last

let htmlUls = document.querySelector(".ul-list").children;

for (i = 0; i <= htmlUls.length - 1; i++) {
  htmlUls[i].firstElementChild.textContent = "First";
  htmlUls[i].lastElementChild.textContent = "Last";
}
