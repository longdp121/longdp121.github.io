//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’.

let content =
  "viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’";

// console.log(content)

function upperFirstChar(myString) {
  let strs = myString.split(" ");
  let newStr = [];
  for (let str of strs) {
    newStr.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  return newStr.join(" ");
}

//Bài 2: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ‘‘Race car’’ trả về true, ‘‘hello world’’ trả về false.

function checkSymmetry(str) {
  let tempStr = str.replace(/ /g, "").toLowerCase();
  // console.log(tempStr)
  let index = 0;
  for (let i = tempStr.length - 1; i >= 0; i--) {
    if (tempStr[index] != tempStr[i]) {
      return false;
    } else {
      index++;
    }
  }
  return true;
}

//Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.

let students = [
  { name: "Abc Def", age: 26650 },
  { name: "Ghi Kml", age: 3000000005 },
  { name: "Njl Opu", age: 80 },
  { name: "Pmw Qio", age: 1 },
];

function sortByAge(myArr) {
    let sortedList = []
    for (obj of myArr) {
        if (obj.age > sortedList[0].age) {
            sortedList.unshift(obj)
        } else {
            sortedList.push(obj.name)
        }
    }
    return sortedList
}