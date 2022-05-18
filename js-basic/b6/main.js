// Bài 1. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về “Pass”, nếu không hợp lệ trả về “Fail”.

/**
 - Giả sử tham số đầu vào là 1 object có dạng như sau (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi):
 {
  username: "username",
  password: "secret",
  confirm: "secret"
}
- Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.
 */

let userSignUp = {
  username: "my_user_name",
  password: "my_pass_123",
  confirm: "my_pass_123",
};

function checkValid(myObject) {
  let username = myObject.username;
  let password = myObject.password;
  let confirm = myObject.confirm;
  if (username == "" || username.length >= 20) {
    return "Fail";
  } else {
    if (password.length < 6 || password.length > 32) {
      return "Fail";
    } else {
      if (confirm != password) {
        return "Fail";
      } else {
        return "Pass";
      }
    }
  }
}

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [‘‘aba’’, ‘‘aa’’, ‘‘ad’’, ‘‘c’’, ‘‘vcd’’] thì kết quả trả về [‘‘aba’’, ‘‘vcd’’].

let stringArray = [
  "abc",
  "def",
  "ghik",
  "lmn",
  "opqld",
  "qwepokoerty",
  "op",
  "12345678910",
  "abc",
  "abc",
  "abc",
];

function findLongest(myArray) {
  let longest = 0;
  for (i of myArray) {
    if (i.length > longest) {
      longest = i.length;
    }
  }
  return longest;
}

function filterLongerst(myArray) {
  let longest = findLongest(myArray);
  let longestArr = [];
  for (i of myArray) {
    if (i.length == longest) {
      longestArr.push(i);
    }
  }
  return longestArr;
}

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.

let studentInfo = [
  { name: "Huy", age: 20 },
  { name: "abc", age: 30 },
  { name: "cde", age: 40 },
  { name: "ghk", age: 50 },
];

function averageAge(objectArray) {
  let sumAge = 0;
  for (i of objectArray) {
    sumAge += i.age;
  }
  return sumAge / objectArray.length;
}

// Extra

let student = [
  {
    name: "",
    class: "",
    phone: "",
  },
  {
    name: "",
    class: "",
    phone: "",
  },
  {
    name: "",
    class: "",
    phone: "",
  },
];

console.log(student.length);
student[0].phone = 123;

console.log(student);

//Extra forEach()

const fruits = ["apple", "orange", "cherry"];

fruits.forEach(function (item, index) {
  console.log(item, index);
});

for (let i in fruits) {
  console.log(fruits[i], typeof i, i);
}

let myArr = ["abc", "def", "ghk"];
console.log(myArr);

// Extra

function findLongestString(arr) {
  let newArr = [];
  let maxLength = 0;

  arr.forEach((str) => {
    if (str.length > maxLength) {
      console.log(str);
      newArr = [];
      newArr.push(str);
      console.log(newArr);
      maxLength = str.length;
    } else if (str.length === maxLength) {
      newArr.push(str);
    }
  });
  return newArr;
}


// sort()

let studentDetails = [
    { name: "Huy", age: 20 },
    { name: "abc", age: 30 },
    { name: "cde", age: 40 },
    { name: "ghk", age: 50 },
  ];

studentDetails.sort(sortObject)

function sortObject(a, b) {
    return b.age - a.age
}

console.log(studentDetails)

let stringArr = [
    "abc",
    "def",
    "ghik",
    "lmn",
    "opqld",
    "qwepokoerty",
    "op",
    "12345678910",
    "abc",
    "abc",
    "abc",
  ];

function sortByLength(a, b) {
    if (a.length < b.length) {
        return -1
    } else if (a.length > b.length) {
        return 1
    } else {
        return 0
    }
}

stringArr.sort(sortByLength)

console.log(stringArr)