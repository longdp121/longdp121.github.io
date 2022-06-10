// // Ways to creat func

// // const sum = (x, y) => x + y

// // console.log(sum(3, 8))

// const sum = (x, y) => {
//     return x + y
// }

// //includes()
// let text = "[Web Frontend 24] Web nâng cao";

// console.log(text.includes("Hello"))

// let fruits = ["lua", "ngo", "khoai", "san"];

// console.log(fruits.includes("lua"))

// //find()
// let numbers = [12, 1212, 313, 4435, 3414]

// function myFunc(value) {
//     return value > 4000
// }

// console.log(numbers.find(myFunc))

// //indexOf()
// let students = ["abc", "def", "ghk"];

// console.log(students.indexOf("def"))

// //filter()
// let condition = numbers.filter(num => num > 1000)
// console.log(condition)

// //map()
// console.log(numbers.map(num => num * 1000))

// let listHocSinh = [
//     {name: "abc", diem: 1},
//     {name: "bcd", diem: 10},
//     {name: "def", diem: 5},
// ]

// let result = listHocSinh.map(hocSinh => {
//     if (hocSinh.diem > 8) {
//         hocSinh.ketqua = "Gioi";
//     } else if (hocSinh.diem > 5 && hocSinh.diem <= 7) {
//         hocSinh.ketqua = "Kha";
//     } else {
//         hocSinh.ketqua = "Bet"
//     }
//     return hocSinh
// })

// console.log(listHocSinh)
// console.log(result)

// //Loc danh sach hoc sinh diem > 7

// let result2 =listHocSinh.filter(hocSinh => hocSinh.diem > 7)

// console.log(result2)

const students = [
    {name: "abc", score: 10, rank: "A"},
    {name: "def", score: 5, rank: "B"},
    {name: "ghi", score: 1, rank: "A"},
    {name: "lmn", score: 8, rank: "B"},

]

let studenTable = document.getElementById("table")
studenTable.style.border = "1px solid black"

for (i = 0; i < students.length; i++) {
    let trTag = document.createElement("tr");
    for (let detail in students[i]) {
        let tdTag = document.createElement("td");
        tdTag.style.border = "1px solid black"
        tdTag.innerText = students[i][detail]
        trTag.append(tdTag)
    }
    studenTable.append(trTag)
}
// document.getElementById("search").onchange = function(event) {
//     // console.log(event.target.value)
//     return event.target.value
// }

document.getElementById("search-btn").onclick = function() {
    let searchContent = document.getElementById("search").value;
    let result = students.filter(student => student.name == searchContent)
    return result
}

