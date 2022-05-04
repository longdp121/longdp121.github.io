// Bài 1. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function century(year) {
  if (year <= 0) {
    console.log("Please enter number greater than zero");
  } else {
    let result = Math.ceil(year / 100);
    let yearLenght = result.toString().length;
    let firstNum = result.toString()[0];
    let lastNum = result.toString()[result.toString().length - 1];
    if ((firstNum == 1) & (yearLenght == 2)) {
      console.log(`Year ${year} belong to ${result}th century`);
    } else {
      if (lastNum == 1) {
        console.log(`Year ${year} belong to ${result}st century`);
      } else if (lastNum == 2) {
        console.log(`Year ${year} belong to ${result}nd century`);
      } else if (lastNum == 3) {
        console.log(`Year ${year} belong to ${result}rd century`);
      } else {
        console.log(`Year ${year} belong to ${result}th century`);
      }
    }
  }
}

// Bài 2. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu " …" ở cuối chuỗi.

function cutString(myString) {
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
