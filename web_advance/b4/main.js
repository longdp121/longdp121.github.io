//Everything is node
//childNodes is direct nodes only
//children is direct element/tag only
//Html tags are element

const ulList = document.querySelectorAll("ul");

for (let ul of ulList) {
  let firstItem = ul.firstElementChild;
  let lastItem = ul.lastElementChild;

  ul.append(firstItem);
  ul.prepend(lastItem);
}


// Quy trinh thao tac tren DOM

//1. Lay hoac tao phan tu DOM
//2. Xu ly noi dung CRUD

