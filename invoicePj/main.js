const dataApi = "http://localhost:3000/options"

const today = new Date()
const todayDate = document.getElementById("todayDate")
const removeChildrenBtn = document.getElementById("removeChildrenBtn");
const addChildrenBtn = document.getElementById("addChildrenBtn");
const childrennNumberInput = document.getElementById("childrennNumberInput");
// const totalPrice = document.getElementById("totalPrice");


todayDate.textContent = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`

//Get data from API for option tag
fetch(dataApi)
.then((res) => res.json())
.then((data) => {
    let optionsList = Object.keys(data);
    optionsList.forEach(function(option) {
        let selectTag = document.getElementById("options")
        let optionTag = document.createElement("option")
        optionTag.value = option;
        optionTag.innerText = data[option].name;
        selectTag.append(optionTag)
    })  
})


//Render
function optionHandle() {
    let options = document.getElementById("options");
    let option = options.options[options.selectedIndex].value;
    fetch(dataApi)
    .then((res) => res.json())
    .then((data) => {
        //Render company information
        let logo = document.getElementById("logo");
        let email = document.getElementById("email");
        let websiteUrl = document.getElementById("webisteUrl");
        logo.src = data[option].logo;
        email.innerText = data[option].email;
        websiteUrl.innerText = data[option].website;

        //Render tour options after choose company
        let optionsList = data[option].options;
        let tourOptions = document.getElementsByClassName("tourOptions")[0];
        tourOptions.innerHTML = "";
        optionsList.forEach(function(item) {
            let optionTag = document.createElement("option");
            optionTag.innerText = item.optionName;
            optionTag.value = item.price;
            tourOptions.append(optionTag)
        });
        let defaulValue = tourOptions.options[tourOptions.selectedIndex].value;
        let unitPirce = document.getElementsByClassName("price")[0];
        unitPirce.innerText = defaulValue;
    })
}

//Option tag and button handler
function optionSelect(e) {
    let thisRow = e.parentElement.parentElement;
    let tourOptions = thisRow.getElementsByClassName("tourOptions")[0];
    let selectedPrice = tourOptions.options[tourOptions.selectedIndex].value;

    //Render unitprice
    let unitPirce = thisRow.getElementsByClassName("unitPrice")[0].getElementsByClassName("price")[0];
    console.log(unitPirce)
    unitPirce.innerText = selectedPrice;

    //Calculate amount
    let quantity = thisRow.getElementsByClassName("unitAmountInput")[0].value;
    let sumPrice = thisRow.getElementsByClassName("sumPrice")[0];
    sumPrice.innerText = Number(selectedPrice) * Number(quantity)

    //Update total
    let table = document.getElementById("priceTable");
    updateTotal(table.rows.length, table);
}

function addRowBtn() {
    //Add new row
    let tourOptionsHtml = document.getElementsByClassName("tourName")[0];
    let unitPriceHtml = document.getElementsByClassName("unitPrice")[0];
    let unitAmountHtml = document.getElementsByClassName("unitAmount")[0];
    let amountHtml = document.getElementsByClassName("amout")[0];
    let newRow = document.getElementById("priceTable").insertRow(-1);
    newRow.className = "tableRow";
    let tourName = newRow.insertCell(0);
    tourName.className = "tourName";
    let unitPrice = newRow.insertCell(1);
    unitPrice.className = "unitPrice";
    let unitAmount = newRow.insertCell(2);
    unitAmount.className = "unitAmount";
    let amount = newRow.insertCell(3);
    amount.className = "amout";
    tourName.innerHTML = tourOptionsHtml.innerHTML;
    unitPrice.innerHTML = unitPriceHtml.innerHTML;
    unitAmount.innerHTML = unitAmountHtml.innerHTML;
    amount.innerHTML = amountHtml.innerHTML;

    let table = document.getElementById("priceTable")
    //Add back x button when add second row anytime
    let length = table.rows.length;
    if (length == 2) {
        for (let i = 0; i < length; i ++) {
            let removeRowBtn = document.getElementsByClassName("removeRowBtn")[i];
            removeRowBtn.innerHTML = `
                <button type="button" onclick="closeRowBtn(this)">X</button>
            `;
        };
    }

    //Clear html of row lengh + 1
    let lastRow = table.getElementsByClassName("tableRow")[length - 1];
    let tourOption = lastRow.getElementsByClassName("tourOptions")[0];
    let selectedPrice = tourOption.options[tourOption.selectedIndex].value;
    let unitPirceCell = lastRow.getElementsByClassName("price")[0];
    let amountCell = lastRow.getElementsByClassName("sumPrice")[0];
    unitPirceCell.innerText = selectedPrice;
    amountCell.innerText = 0;
};

function addBlankRowBtn() {
    let tourOptionsHtml = document.getElementsByClassName("tourName")[0];
    let unitPriceHtml = document.getElementsByClassName("unitPrice")[0];
    let unitAmountHtml = document.getElementsByClassName("unitAmount")[0];
    let amountHtml = document.getElementsByClassName("amout")[0];
    let newRow = document.getElementById("priceTable").insertRow(-1);
    newRow.className = "tableRow";
    let tourName = newRow.insertCell(0);
    tourName.className = "tourName";
    let unitPrice = newRow.insertCell(1);
    unitPrice.className = "unitPrice";
    let unitAmount = newRow.insertCell(2);
    unitAmount.className = "unitAmount";
    let amount = newRow.insertCell(3);
    amount.className = "amout";

    //Create input for tour name
    let inputTag = document.createElement("input");
    inputTag.type = "text";
    tourName.append(inputTag);

    //Create input for unit price
    console.log(newRow)
    unitPrice.innerHTML = unitPriceHtml.innerHTML;
    let unitPirceCell = newRow.getElementsByClassName("unitPrice")[0];
    unitPirceCell.innerHTML = `
            <input type="number" class="price" min="0" size="5">
            <span>$</span>
    `;

    unitAmount.innerHTML = unitAmountHtml.innerHTML;
    amount.innerHTML = amountHtml.innerHTML;

    let sumPrice = newRow.getElementsByClassName("sumPrice")[0];
    sumPrice.innerText = 0;
}

let quantityInput = function(e) {
    let quantity = Number(e.value);
    let thisTr = e.parentElement.parentElement;
    let sumPrice = thisTr.getElementsByClassName("amout")[0].getElementsByTagName("div")[0].getElementsByClassName("sumPrice")[0];
    // let unitPrice = thisTr.getElementsByClassName("unitPrice")[0].getElementsByClassName("price")[0].innerText
    let unitPrice = thisTr.getElementsByClassName("unitPrice")[0].getElementsByClassName("price")[0]
    if (unitPrice.tagName == "INPUT") {
        unitPrice = unitPrice.value;
    };
    if (unitPrice.tagName == "SPAN") {
        unitPrice = unitPrice.innerText;
    }
    sumPrice.innerText = quantity * Number(unitPrice);


    //Calculate total
    let table = document.getElementById("priceTable");
    updateTotal(table.rows.length, table);
};

let closeRowBtn = function(row){
    let table = document.getElementById("priceTable");
    let delIndex = row.parentNode.parentNode.parentNode.parentNode.rowIndex;
    table.deleteRow(delIndex - 1)
    console.log("This is index", delIndex)
    //Remove x button for only-row
    let length = table.rows.length;
    if (length == 1) {
        let removeRowBtn = document.getElementsByClassName("removeRowBtn")[0];
        removeRowBtn.innerHTML = "";
    }
    updateTotal(table.rows.length, table);
    // document.getElementById('priceTable').deleteRow(i-1);
}

let addChildren = function() {
    addChildrenBtn.classList.add("d-none");
    childrennNumberInput.classList.remove("d-none");
    console.log(addChildrenBtn.classList);
};

let removeChildren = function() {
    let childrennNumber = document.getElementById("childrennNumber");
    childrennNumber.value = 0;
    childrennNumberInput.classList.add("d-none");
    addChildrenBtn.classList = "opacity-0";
};

removeChildrenBtn.onmouseover = function() {
    removeChildrenBtn.classList = "opacity-100";
};

removeChildrenBtn.onmouseout = function() {
    removeChildrenBtn.classList = "opacity-0";
};

addChildrenBtn.onmouseover = function() {
    if (addChildrenBtn.classList.contains("d-none")) {
        console.log(10)
    }
    else {
        addChildrenBtn.classList = "opacity-100"
    }
};

addChildrenBtn.onmouseout = function() {
    if (addChildrenBtn.classList.contains("d-none")) {
        return
    }
    else {
        addChildrenBtn.classList = "opacity-0"
    }
};

// function updateTotal(sl){
//     var items = document.getElementById("priceTable");
//     var rows = items.getElementsByClassName("roww");
//     var totalPrice = 0;
//     for(var i = 0; i < rows.length; i++){
//         var row = rows[i];
//         var unitPrice = row.getElementsByClassName("unitPrice")[0].getElementsByClassName("price")[0];
//         var hangSoLuong = row.getElementsByClassName("unitAmount")[0].getElementsByClassName("soLuong")[0];
//         var priceLong = parseFloat(unitPrice.innerText);
//         var soLuong = hangSoLuong.value;
//         //var testUnitPrice = parseFloat(unitPrice.innerText);
//         totalPrice = totalPrice + soLuong*priceLong;
//     }

//     document.getElementsByClassName("totalPrice")[0].innerText = totalPrice;
// }



function updateTotal(length, table) {
    let total = 0;
    for (let i = 0; i < length; i++) {
        let amount = table.getElementsByClassName("tableRow")[i].getElementsByClassName("amout")[0].getElementsByClassName("sumPrice")[0].innerText;
        total += Number(amount)
    }
    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerText = total;
}

