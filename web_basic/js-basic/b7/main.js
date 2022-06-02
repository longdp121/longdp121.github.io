//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’.

let content =
  "viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’";

// console.log(content)

function upperFirstChar(myString) {
  let strs = myString.split(" ");
  for (let str of strs) {
    str = str[0].toUpperCase() + str.slice(1).toLowerCase()
  }
  return strs.join(" ");
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
  { name: "Abc Def", age: 55 },
  { name: "Ghi Kml", age: 23 },
  { name: "Njl Opu", age: 80 },
  { name: "Pmw Qio", age: 13 },
  { name: "Abc Def", age: 45 },
  { name: "Ghi Kml", age: 89 },
  { name: "Njl Opu", age: 12 },
  { name: "Pmw Qio", age: 21 },
  { name: "Abc Def", age: 23 },
  { name: "Ghi Kml", age: 49 },
  { name: "Njl Opu", age: 67 },
  { name: "Pmw Qio", age: 19 },
];

function sortByAge(myArr) {
  let run = true;
  let temp = {};
  while (run) {
    run = false;
    for (i = 0; i <= myArr.length - 2; i++) {
      if (myArr[i].age < myArr[i + 1].age) {
        temp = myArr[i];
        myArr[i] = myArr[i + 1];
        myArr[i + 1] = temp;
        run = true;
      }
    }
  }
  return myArr;
}

//Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ‘‘H’’ hoặc ‘‘h’’.

let studentList = [
  { name: "Harry Potter", age: 10 },
  { name: "Susan Bones", age: 105 },
  { name: "Hermione Granger", age: 120 },
  { name: "Ron Weasley", age: 103 },
  { name: "Draco Malfoy", age: 100 },
  { name: "Cedric Diggory", age: 170 },
  { name: "Cho Chang", age: 100 },
  { name: "Horace Slughorn", age: 190 },
  { name: "Hannah Abbott", age: 106 },
  { name: "Sirius Black", age: 155 },
  { name: "Minerva McGonagall", age: 140 },
  { name: "Voldemod", age: 1000 },
];

function filterStudent(myArr) {
  let filteredList = [];
  for (obj of myArr) {
    if (obj.name[0].toLowerCase() == "h") {
      filteredList.push(obj);
    }
  }
  return filteredList;
}
