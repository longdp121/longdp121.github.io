// Bài 1. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function century(year) {
  if (year <= 0) {
    console.log("Please enter number greater than zero");
  } else {
    let result = Math.ceil(year / 100);
    let yearLenght = result.toString().length;
    let firstNum = result.toString()[0];
    let lastNum = result.toString().slice(-1);
    let ordinal = "";
    if ((firstNum == 1) & (yearLenght == 2)) {
      ordinal = "th";
    } else {
      if (lastNum == 1) {
        ordinal = "st";
      } else if (lastNum == 2) {
        ordinal = "nd";
      } else if (lastNum == 3) {
        ordinal = "rd";
      } else {
        ordinal = "th";
      }
    }
    console.log(`Year ${year} belong to ${result}${ordinal} century`);
  }
}

// Bài 2. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu " …" ở cuối chuỗi.

function cutString(inputString) {
  let myString = inputString.toString();
  if (myString.length <= 10) {
    console.log(myString);
  } else {
    console.log(`${myString.slice(0, 10)}...`);
  }
}

// Bài 3. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa chữ cái đầu tiên.

function upperFirstLetter(myString) {
  let firstLetter = myString[0].toUpperCase();
  let remainOfString = myString.slice(1).toLowerCase();
  console.log(`${firstLetter}${remainOfString}`);
}

// Bonus: Viet mot ham gom 2 tham so. Tham so 1 la chuoi, tham so 2 la so ky tu can cat

function cutStringByNumber(myString, num) {
  console.log(myString.slice(0, num));
  console.log(num);
}

//Bonus 2: Cho mot chuoi, thay khoang trang bang dau gach ngang

function replaceSpace(myString) {
  let dash = "-";
  return myString.replace(/ /g, dash);
}

let mt = "Hello anh em";

console.log(mt.split(" "));
