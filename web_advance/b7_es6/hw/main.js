const professionFilter = [
    "Nông Nghiệp",
    "Khai Khoáng",
    "Tài Chính",
    "Du Lịch",
    "Công Nghệ Thông Tin",
    "Y Dược",
    "Xây Dựng"
]

const locations = [
  "Hà Nội",
  "TP Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Nam Đình",
  "Phú Quốc"
]

const inputs = document.querySelectorAll("input")
const checkboxesTags = document.getElementById("professions")

//input style
inputs.forEach(styleInputs)

function styleInputs(input) {
    input.setAttribute("size", input.getAttribute("placeholder").length)
}

