// Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.

function checkNumber(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Please enter number";
  } else {
    let maxNum;
    if (a > b) {
      maxNum = a;
    } else {
      maxNum = b;
    }
    return maxNum;
  }
}

// Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.

function factorial(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "Please enter positive interger number only";
  } else {
    if (num == 1 || num == 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
}

/**
 Bài 3. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

Từ 8.5 đến 10: Điểm A
Từ 7 đến dưới 8.5: Điểm B
Từ 5.5 đến dưới 7: Điểm C
Từ 4 đến dưới 5.5: Điểm D
Từ 0 đến dưới 4: Điểm F
 */

function score(x) {
  if (x >= 0 && x <= 10) {
    let scoreInLetter;
    if (x >= 8.5) {
      scoreInLetter = "A";
    } else if (x >= 7) {
      scoreInLetter = "B";
    } else if (x >= 5.5) {
      scoreInLetter = "C";
    } else if (x >= 4) {
      scoreInLetter = "D";
    } else {
      scoreInLetter = "F";
    }
    return scoreInLetter;
  } else {
    return "Invalid value";
  }
}

// Bài 4. Viết hàm translate() có tác dụng dịch từ “Hello” sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.

function translate(lang) {
  switch (lang) {
    default: {
      return "xin chao";
    }
    case "ja": {
      return "こんにちは";
    }
    case "ko": {
      return "안녕하세요";
    }
    case "fr": {
      return "salut";
    }
    case "ar": {
      return "أهلا";
    }
  }
}

function translate2(lang) {
  if (lang == "ja") {
    return "こんにちは";
  } else if (lang == "ko") {
    return "안녕하세요";
  } else if (lang == "fr") {
    return "salut";
  } else if (lang == "ar") {
    return "أهلا";
  }
  return "xin chao"
}

// Extra Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.

let numArr = [
  134, 34, 343, 564, 7545, 5266, 765, 8, 9019, 1055, 11561, 115462, 133,
  1315454, 1115, 15516, 18987, 6618, 1569, 985820,
];

function orderEvenNum(arr) {
  let evenNumArr = [];
  for (let i in arr) {
    if (arr[i] % 2 == 0) {
      evenNumArr.push(arr[i]);
    }
  }
  return evenNumArr.sort(function (a, b) {
    return b - a;
  });
}

/*
Extra Bài 4. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về “Pass”, nếu không hợp lệ trả về “Fail”.
- Giả sử tham số đầu vào là 1 object có dạng như sau (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi):
{
  username: "username",
  password: "secret",
  confirm: "secret"
}
- Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.
*/

let userInfo = {
  username: "hello_anh_em",
  password: "mypass123",
  confirm: "mypass123",
};

function checkValid(userObject) {
  if (userObject.username.length > 20 || userObject.username == "") {
    return "Invalid username. Username cannot be blank or over 20 characters";
  } else {
    if (userObject.password.length < 6 || userObject.password.lenght > 32) {
      return "Password must be longer than 6 and shorter than 32 characters";
    } else {
      if (userObject.password != userObject.confirm) {
        return "Confirm password not match";
      } else {
        return "Create account successful";
      }
    }
  }
}

/**
 * Viet ham n ra man hinh so tu 1 den 100
 * - Chia het cho 3 mau 'orange'
 * - Chia het cho 5 mau 'red'
 * - Chia het cho 3 + 5 mau 'blue
 * - Con lai mau den
 */

function printNumber() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write(`<p style="color: blue">${i}</p>`)
    } else if (i % 3 == 0) {
      document.write(`<p style="color: orange">${i}</p>`)
    } else if (i % 5 == 0) {
      document.write(`<p style="color: red">${i}</p>`)
    } else {
      document.write(`<p>${i}</p>`)
    }
  }
}
