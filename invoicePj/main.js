// const dataApi = "http://localhost:3000/options"

const dataApi = "https://mocki.io/v1/7d0fb43e-cdac-4696-9660-a63e78d465a9";

// const dataApi = "https://demo.halongbaydoriscruise.com/data/tours.json";

const today = new Date()
const todayDate = document.getElementById("todayDate")
const removeChildrenBtn = document.getElementById("removeChildrenBtn");
const addChildrenBtn = document.getElementById("addChildrenBtn");
const childrennNumberInput = document.getElementById("childrennNumberInput");


todayDate.textContent = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`

//Get data from API for option tag
fetch(dataApi)
.then((res) => res.json())
.then((data) => {
    let optionsList = Object.keys(data.options);
    // console.log(optionsList)
    optionsList.forEach(function(option) {
        let selectTag = document.getElementById("options");
        let optionTag = document.createElement("option");
        // console.log(optionTag)
        optionTag.value = option;
        // console.log(option);
        // console.log(data.options[option].name)
        optionTag.innerText = data.options[option].name;
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
        logo.src = data.options[option].logo;
        email.innerText = data.options[option].email;
        websiteUrl.innerText = data.options[option].website;

        //Render tour options after choose company
        let optionsList = data.options[option].options;
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

        //Render payment for
        let paymentFor = document.getElementById("paymentFor");
        paymentFor.innerText = data.options[option].name;
    })
}

//Functions
function updateTotal(length, table) {
    let total = 0;
    for (let i = 0; i < length; i++) {
        let amount = table.getElementsByClassName("tableRow")[i].getElementsByClassName("amout")[0].getElementsByClassName("sumPrice")[0].innerText;
        total += Number(amount)
    }
    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerText = total;
}

//Option tag and button handler
function optionSelect(e) {
    let thisRow = e.parentElement.parentElement;
    let tourOptions = thisRow.getElementsByClassName("tourOptions")[0];
    let selectedPrice = tourOptions.options[tourOptions.selectedIndex].value;

    //Render unitprice
    let unitPirce = thisRow.getElementsByClassName("unitPrice")[0].getElementsByClassName("price")[0];
    unitPirce.innerText = selectedPrice;

    //Calculate amount
    let quantity = thisRow.getElementsByClassName("unitAmountInput")[0].value;
    let sumPrice = thisRow.getElementsByClassName("sumPrice")[0];
    sumPrice.innerText = Number(selectedPrice) * Number(quantity)

    //Update total
    let table = document.getElementById("priceTable");
    updateTotal(table.rows.length, table);

    //Update pending amount
    let totalPrice = document.getElementById("totalPrice");
    let pendinhAmount = document.getElementById("pendinhAmount");
    if (depositAmount.value === "") {
        pendinhAmount.innerText = totalPrice.innerText;
    }
    pendinhAmount.innerText = Number(totalPrice.innerText) - Number(depositAmount.value);
};

function viewTempleteleBtn() {
    //Get all values
    let customerNameInputValue = document.getElementById("customerNameInput").value;
    let adultNumberInputValue = document.getElementById("adultNumber").value;
    let childrennNumberInputValue = document.getElementById("childrennNumber").value;
    let startDateInputValue = document.getElementById("startDate").value;
    let priceTable = Array.from(document.getElementById("priceTable").children).map(function(item) {
        let obj = {};
        let tourName = item.getElementsByClassName("tourName")[0];
        let unitPrice = item.getElementsByClassName("unitPrice")[0];
        let unitAmount = item.getElementsByClassName("unitAmount")[0].getElementsByClassName("unitAmountInput")[0];
        if (tourName.childElementCount === 2) {
            obj.tourName = tourName.getElementsByTagName("select")[0].options[tourName.getElementsByTagName("select")[0].selectedIndex].text;
            obj.unitPrice = null;
        } else if (tourName.childElementCount === 1) {
            obj.tourName = tourName.getElementsByTagName("input")[0].value;
            obj.unitPirce = unitPrice.getElementsByTagName("input")[0].value;
        };
        obj.unitAmount = unitAmount.value;
        return obj
    });
    let paymentStatusInputValue = document.getElementById("paymentStatus").options[document.getElementById("paymentStatus").selectedIndex].text;
    let depositAmountInputValue = document.getElementById("depositAmount").value;

    //Re-render invoice header
    let mainContentEditor = document.getElementById("mainContentEditor");
    let mainContentViewer = document.getElementById("mainContentViewer");
    mainContentViewer.innerHTML = mainContentEditor.innerHTML;
    mainContentEditor.classList.add("d-none");
    ////Render customer name
    let customerNameInputViewDiv = mainContentViewer.querySelector("#customerNameInput").parentElement;
    let spanTagCustomerName = document.createElement("span");
    spanTagCustomerName.innerText = customerNameInputValue;
    customerNameInputViewDiv.removeChild(customerNameInputViewDiv.lastElementChild);
    customerNameInputViewDiv.append(spanTagCustomerName);
    ////Render group size
    let adultNumberInputViewDiv = mainContentViewer.querySelector("#adultNumber").parentElement;
    let spanTagAdultNumber = document.createElement("span");
    spanTagAdultNumber.innerHTML = `&nbsp${adultNumberInputValue}`;
    adultNumberInputViewDiv.removeChild(adultNumberInputViewDiv.firstElementChild);
    adultNumberInputViewDiv.prepend(spanTagAdultNumber);
    let childrenNumberInputViewDiv = mainContentViewer.querySelector("#childrennNumber").parentElement;
    let spanChildrenNumber = document.createElement("span");
    spanChildrenNumber.innerHTML = `&nbsp${childrennNumberInputValue}&nbsp`
    childrenNumberInputViewDiv.replaceChild(spanChildrenNumber, childrenNumberInputViewDiv.querySelector("#childrennNumber"));
    ////Render date
    let startDateDiv = mainContentViewer.querySelector("#startDate").parentElement;
    let spanTagStartDate = document.createElement("span");
    spanTagStartDate.innerText = startDateInputValue;
    startDateDiv.replaceChild(spanTagStartDate, startDateDiv.lastElementChild);

    //Re-render table price
    let priceTableViewDiv = mainContentViewer.querySelector("#priceTable");
    let rows = priceTableViewDiv.getElementsByClassName("tableRow");
    for (let i = 0; i < priceTableViewDiv.childElementCount; i++) {
        let row = rows[i];
        ////Render tourName
        let tourName = row.getElementsByClassName("tourName")[0];
        tourName.innerHTML = "";
        let pTag = document.createElement("p");
        pTag.innerText = priceTable[i].tourName;
        // console.log(priceTable[i].tourName)
        tourName.append(pTag);

        ////Render unitPrice
        let unitPrice = row.getElementsByClassName("unitPrice")[0];
        if (unitPrice.children[0].tagName === "INPUT") {
            let spanTag = document.createElement("span");
            spanTag.innerText = priceTable[i].unitPirce;
            // console.log(unitPrice.children[0]);
            unitPrice.replaceChild(spanTag, unitPrice.children[0]);
        };

        ////////Render unitAmount
        let unitAmount = row.getElementsByClassName("unitAmount")[0];
        let spanTag = document.createElement("span");
        spanTag.innerText = priceTable[i].unitAmount;
        unitAmount.replaceChild(spanTag, unitAmount.children[0]);
    };

    //Re-render payment status
    let paymentStatus = mainContentViewer.querySelector("#paymentStatus").parentElement;
    console.log(paymentStatus);
    let spanTag = document.createElement("span");
    spanTag.innerText = paymentStatusInputValue;
    paymentStatus.innerHTML = "";
    paymentStatus.append(spanTag);
    if (paymentStatusInputValue === "Deposit") {
        let depositAmount = mainContentViewer.querySelector("#depositAmount").parentElement;
        let spanTag = document.createElement("span");
        spanTag.innerText = depositAmountInputValue;
        depositAmount.replaceChild(spanTag, depositAmount.children[1]);
    }
};

function untirPriceInput(e) {
    let inputValue = e.value;
    let unitAmount = e.parentElement.parentElement.getElementsByClassName("unitAmount")[0].getElementsByClassName("unitAmountInput")[0].value;
    let sumPrice = e.parentElement.parentElement.getElementsByClassName("amout")[0].getElementsByClassName("sumPrice")[0];
    if (unitAmount !== "") {
        sumPrice.innerText = Number(inputValue) * Number(unitAmount)
    };

    //Update total
    let table = document.getElementById("priceTable");
    updateTotal(table.rows.length, table);

    //Update pending amount
    let totalPrice = document.getElementById("totalPrice");
    let pendinhAmount = document.getElementById("pendinhAmount");
    if (depositAmount.value === "") {
        pendinhAmount.innerText = totalPrice.innerText;
    }
    pendinhAmount.innerText = Number(totalPrice.innerText) - Number(depositAmount.value);
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
    let length = table.rows.length;

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
    unitPrice.innerHTML = unitPriceHtml.innerHTML;
    let unitPirceCell = newRow.getElementsByClassName("unitPrice")[0];
    unitPirceCell.innerHTML = `
            <input type="number" class="price" min="0" size="5" onchange="untirPriceInput(this)">
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

    //Update pending amount in deposit
    let totalPrice = document.getElementById("totalPrice");
    let pendingAmount = document.getElementById("pendinhAmount");
    let depositAmount = document.getElementById("depositAmount").value;
    if (depositAmount === "") {
        pendingAmount.innerText = totalPrice.innerText;
    };
    pendingAmount.innerText = Number(totalPrice.innerText) - Number(depositAmount)
};

let closeRowBtn = function(row){
    let table = document.getElementById("priceTable");
    let length = table.rows.length;
    if (length === 1) {
        return
    }
    let delIndex = row.parentNode.parentNode.parentNode.parentNode.rowIndex;
    table.deleteRow(delIndex - 1)
    //Remove x button for only-row
    // let length = table.rows.length;
    // if (length == 1) {
    //     let removeRowBtn = document.getElementsByClassName("removeRowBtn")[0];
    //     removeRowBtn.innerHTML = "";
    // };

    updateTotal(table.rows.length, table);
    // document.getElementById('priceTable').deleteRow(i-1);

    //Update pending amount
    let totalPrice = document.getElementById("totalPrice");
    let pendingAmount = document.getElementById("pendinhAmount");
    let depositAmount = document.getElementById("depositAmount").value;
    if (depositAmount === "") {
        pendingAmount.innerText = totalPrice.innerText;
    };
    pendingAmount.innerText = Number(totalPrice.innerText) - Number(depositAmount)
};

function paymentStatus(e) {
    let paymentStatus = e.value;
    for (let i = 0; i < e.length; i++) {
        let optionTag = e.getElementsByTagName("option")[i];
        let paymentStatusDiv = document.getElementsByClassName(`${optionTag.value}`)[0];
        if (paymentStatusDiv.classList.contains(paymentStatus)) {
            paymentStatusDiv.classList.remove("d-none")
        };

        if (!paymentStatusDiv.classList.contains(paymentStatus)) {
            paymentStatusDiv.classList.add("d-none")
        }
    }
};

function updateDepositAmount(e) {
    let depositAmount = e.value;
    let totalPrice = document.getElementById("totalPrice").innerText;
    let pendingAmount = document.getElementById("pendinhAmount");

    pendingAmount.innerText = Number(totalPrice) - Number(depositAmount)
};

function qrCodeGenerate() {
    let paymentLinkInput = document.getElementById("paymentLinkInput");
    let paymentLink = document.getElementById("paymentLink").value;
    let qrCodePaymentDiv = document.getElementById("qrCodePaymentDiv");
    let qrCodePayment = document.getElementById("qrCodePayment");
    if (paymentLink === "") {
        return
    };
    qrCodePayment.innerHTML = "";
    qrCodePayment.href = "";
    let qrCode = new QRCode("qrCodePayment", {
        width: 120,
        height: 120,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
    qrCodePayment.href = paymentLink;
    qrCode.makeCode(paymentLink);
    paymentLinkInput.classList.add("d-none");
    qrCodePaymentDiv.classList.remove("d-none");
};

function editQrCode() {
    let paymentLinkInput = document.getElementById("paymentLinkInput");
    let qrCodePaymentDiv = document.getElementById("qrCodePaymentDiv");
    paymentLinkInput.classList.remove("d-none");
    qrCodePaymentDiv.classList.add("d-none");
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


