// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

function convertTemp(c) {
  return (c * 9) / 5 + 32;
}

//Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

let numList = [121, 432, 43, 51, 415, 5454535, 43243];

function findSecondBigest(myList) {
  let run = true;
  while (run) {
    run = false;
    let temp = 0;
    for (i = 0; i <= myList.length - 2; i++) {
      if (myList[i] < myList[i + 1]) {
        temp = myList[i];
        myList[i] = myList[i + 1];
        myList[i + 1] = temp;
        run = true;
      }
    }
  }
  return myList[1];
}

//Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.

let myStrings = ["abc", "dfaf", "fdsf3434", "dfd222222222222222", "df", "END!"];

function findLongest(strs) {
  longest = strs[0];
  for (i = 0; i <= strs.length - 2; i++) {
    if (longest.length < strs[i + 1].length) {
      longest = strs[i + 1];
    }
  }
  return longest;
}

//Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

let myString = "abcedf---GHL";
let myTarget = "GsHL";

function checkTargetEnd(str, target) {
  if (str.slice(str.length - target.length, str.length) === target) {
    return true
  }
  return false
}

// function checkTargetEnd(str, target) {
//   let targetIndex = 0;
//   for (i = str.length - target.length; i <= str.length; i++) {
//     if (str[i] != target[targetIndex]) {
//       return false;
//     } else {
//       targetIndex++;
//     }
//   }
//   return true;
// }

//Bài 5: Cho 1 mảng các chuỗi. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

let myStrList = ["abc", "1234", "@#@#", "abc"];

function checkDup(strs) {
  for (i = 0; i <= strs.length - 1; i++) {
    for (let j = i + 1; j <= strs.length - 1; j++) {
      if (strs[i] === strs[j]) {
        return true;
      }
    }
  }
  return false;
}
