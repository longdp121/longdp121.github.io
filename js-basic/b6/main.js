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
    confirm: "my_pass_123"
}

function checkValid(myObject) {
    let username = myObject.username;
    let password = myObject.password;
    let confirm = myObject.confirm;
    if (username == "" || username.length >= 20) {
        return "Fail"
    } else {
        if (password.length < 6 || password.length > 32) {
            return "Fail"
        } else {
            if (confirm != password) {
                return "Fail"
            } else {
                return "Pass"
            }
        }
    }
}

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [‘‘aba’’, ‘‘aa’’, ‘‘ad’’, ‘‘c’’, ‘‘vcd’’] thì kết quả trả về [‘‘aba’’, ‘‘vcd’’].

let stringArray = ["abc", "def", "ghik", "lmn", "opqld", "qwepokoerty", "op", "12345678910"]

function findLongest(myArray) {
    let longest = 0;
    for (i of myArray) {
        if (i.length > longest) {
            longest = i.length
        }
    }
    return longest
}

function filterLongerst(myArray) {
    let longest = findLongest(myArray)
    let longestArr = []
    for (i of myArray) {
        if (i.length == longest) {
            longestArr.push(i)
        }
    }
    return longestArr
}