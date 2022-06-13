const names = ["Nam", "Ha", "Duy", "Trung", "Duy jay"]

let selectTag = document.getElementById("select-tag")

for (let name of names) {
    let optionTag = document.createElement("option")
    optionTag.innerText = name;
    selectTag.append(optionTag)
}