// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự “-”. Ví dụ cho chuỗi “123” thì kết quả sẽ là “123-123-123-123-123-123-123-123-123-123”.

function repeatString(myString) {
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += myString;
    }
    return result.replaceAll(`${myString.slice(-1)}${myString[0]}`,`${myString.slice(-1)}-${myString[0]}`
    );
    // return result
}

//  Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

function factorial(num) {
    if (num == 0) {
        return `${num}! = 1`;
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return `${num}! = ${result}`;
    }
}

// Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi “hello” thì kết quả trả về sẽ là “olleh”. Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

function reverseString(myString) {
    let result = "";
    for (let i = myString.length - 1; i >= 0; i--) {
        result += myString[i];
    }
    return result;
}

// Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

function printNumber() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            document.write(`<p style="color: green">${i}</p>`);
        } else {
            document.write(`<p style="color: red">${i}</p>`);
        }
    }
}

// Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).

let studentList = [
    'Harry Potter',
    'Susan Bones',
    'Hermione Granger',
    'Ron Weasley',
    'Draco Malfoy',
    'Cedric Diggory',
    'Cho Chang',
    'Horace Slughorn',
    'Hannah Abbott',
    'Sirius Black',
    'Minerva McGonagall',
]

function prictStudentName(studentList) {
    let arr = studentList.sort();
    for (let i = 1; i <= arr.length; i++) {
        document.write(`<p>${i}. ${arr[i - 1]}</p>`)
    }
}

// Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2. Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 19, 20]

function remainderArray(numberArray) {
    let newArray = []
    for (let i = 0; i <= numberArray.length - 1; i++) {
        newArray.push(numberArray[i] % 2)
    }
    return newArray
}
