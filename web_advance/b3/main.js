/**
 * JS data type
 * 1. Number
 * 2. String
 * 3. Object (Object + array)
 * 4. boolean
 * 5. null
 * 6. undefined
 * 7. fucntion
 * 8. bigint
 * 9. symbol
 */

document.title = "hello";
// console.log(document.links);

// console.log(document.forms);

// console.log(document.body.childNodes);

// console.log(document.body.children);

// console.log(document.body.nodeName);

// console.log(document.links[0].href);

// console.log(document.links[0].firstChild.nodeType);

// console.log(document.links[0].firstChild.nodeName);

// document.links[0].textContent = "Dog";

const imgs = document.images;

// console.log(imgs); //HTMLCollection

const firstImg = imgs[0];
const secondImg = imgs[1];

firstImg.src =
  "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4";

firstImg.width = 200;
firstImg.alt = "Dog";

// let imgArr = Array.from(imgs);
// console.log(imgArr);

//querySelector
//Return 1st tag that fit the search
const h1 = document.querySelector(".heading");

// console.log(h1);

//node ==> textContent
//element ==> innerText, innerHTML

// h1.textContent = 'Hello anh em';
// h1.innerText = "Hello cac ban"
h1.innerHTML = "Hello <span style='color: red'>Anh em</span>";

//querrySelectorAll
document.querySelectorAll("img");

//Exam
const p = document.querySelector(".para");
let strs = p.innerText.split(" ");

let count = 0;
for (let i = 0; i < strs.length; i++) {
  if (strs[i].length >= 8) {
    count++;
    strs[i] = `<b>${strs[i]}</b>`;
  }
}

let newContent = strs.join(" ");

console.log(newContent);

p.innerHTML = newContent;
document.title = `There are ${count} words logher than 8`;
