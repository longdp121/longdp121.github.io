// Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:

function autoDate() {
  let date = new Date();
  return [date.getDate(), date.getMonth(), date.getFullYear()];
  // return [10, 9, 2055]
}

function season() {
  let month = autoDate()[1];
  let seasonName;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if ([1, 2, 3].includes(month)) {
    seasonName = "Spring";
  } else if ([4, 5, 6].includes(month)) {
    seasonName = "Summer";
  } else if ([7, 8, 9].includes(month)) {
    seasonName = "Fall";
  } else {
    seasonName = "Winter";
  }
  document.write(
    `<p>
    ${autoDate()[0]} ${months[month]} ${autoDate()[2]} is ${seasonName}
    </p>`
  );
}

// Bài 2. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).

let studentList = [
  "Harry Potter",
  "Susan Bones",
  "Hermione Granger",
  "Ron Weasley",
  "Draco Malfoy",
  "Cedric Diggory",
  "Cho Chang",
  "Horace Slughorn",
  "Hannah Abbott",
  "Sirius Black",
  "Minerva McGonagall",
];

function studentSort(myList) {
  myList.sort();
  for (let i = 0; i < myList.length; i++) {
    document.write(`<p>${i + 1}. ${myList[i]}</p>`);
  }
}

// Number array
let numList = [
  12323, 47575, 9375, 310, 5164574, 54, 68904, 45, 51, 64, 8, 4234, 34, 7475, 4,
  9290, 23, 323, 43434, 55,
];

// Bài 3. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới chỉ chứa các số chẵn trong mảng truyền vào.

function evenNum(myList) {
  let evenNumList = [];
  for (i of myList) {
    if (i % 2 == 0) {
      evenNumList.push(i);
    }
  }
  return evenNumList;
}

// Bài 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

function findMinNum(myList) {
  let minNum = myList[0];
  for (i of myList) {
    if (i < minNum) {
      minNum = i;
    }
  }
  return minNum;
}

// Extra Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false(kiểu boolean). Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.

let boolList = [false, false, true, false, true];

function findFirstTrue(myList) {
  for (let i = 0; i < myList.length; i++) {
    if (myList[i]) {
      return i;
    }
  }
}

function findFirstTrue2(myList) {
  let count = -1;
  for (i of myList) {
    count++
    if (i) {
      return count
    }
  }
}