// Render data

function renderProducts() {
    fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product")
        .then((response) => response.json())
        .then((data) => {
            console.log("This is data", data);
            let productsTable = document.getElementById("table");
            data.forEach(function (item) {
                let trTag = document.createElement("tr");
                let tdTag = document.createElement("td");
                let delBtn = document.createElement("button");
                delBtn.id = `delbtn-${item["id"]}`;
                delBtn.name = "delete";
                delBtn.innerText = "Delete";
                let editBtn = document.createElement("button");
                editBtn.id = `editbtn-${item["id"]}`;
                editBtn.name = "edit";
                editBtn.innerText = "Edit";
                for (let itemElement in item) {
                    let tdTag = document.createElement("td");
                    tdTag.innerText = item[itemElement];
                    trTag.append(tdTag);
                }
                tdTag.append(delBtn);
                tdTag.append(editBtn);
                trTag.append(tdTag);
                productsTable.append(trTag);
            });
        })
        .then(
            console.log(10)
        )
}

renderProducts();

// Add new data
let addBtn = document.getElementById("add-btn");
let newNameInput = document.getElementById("new-name-input");
let newDetailsInput = document.getElementById("new-details-input");
let newPriceInput = document.getElementById("new-price-input");
let saveBtn = document.getElementById("save-btn");
let cancelAddBtn = document.getElementById("cancel-btn");

addBtn.onclick = function () {
    let formAddNew = document.getElementById("add-item-table");
    formAddNew.style.display = "block";
};

cancelAddBtn.onclick = function () {
    let formAddNew = document.getElementById("add-item-table");
    formAddNew.style.display = "none";
    newNameInput.value = "";
    newDetailsInput.value = "";
    newPriceInput.value = "";
};

saveBtn.onclick = function () {
    fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: newNameInput.value,
            description: newDetailsInput.value,
            pice: parseInt(newPriceInput.value),
        }),
    })
        .then((response) => response.json())
        .then(renderProducts());
};

// Edit and delete
// let delbtns = document.getElementsByClassName("button[name='delete']");
// console.log(delbtns)