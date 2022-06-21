var jobs = [
  {
    jobName: "Lập trình viên",
    company: "FPT",
    salary: "3.000.000d",
    city: "Ha Noi",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
  {
    jobName: "Lập trình viên",
    company: "Zing",
    salary: "6.000.000.000d",
    city: "Ho Chi Minh",
    level: "student",
    time: "3-days",
    status: "nhan-vien-chinh-thuc",
    benefit: "du-lich",
  },
  {
    jobName: "Kinh Doanh",
    company: "Vin",
    salary: "9.000.000d",
    city: "Da Nang",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },
  {
    jobName: "kế Toán",
    company: "Zoo",
    salary: "5.000.000d",
    city: "Campodia",
    level: "employee",
    time: "1-week",
    status: "thoi-vu-tu-do",
    benefit: "che-do-bao-hiem",
  },

  {
    jobName: "Kế Toán",
    company: "JAV",
    salary: "5.000.000d",
    city: "Japan",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },

  {
    jobName: "Lập trình viên",
    company: "Casino",
    salary: "9.000.000d",
    city: "Hong Kong",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
];

// click nút tìm kiếm -> tìm kiếm từ có trong jobName
// click tìm kiếm nâng cao sẽ hiển thị các ô tìm kiếm kết hợp với điều kiện tìm kiếm nâng cao

let resultTable = $("#result-table");
let searchInput = $("#search-input");
let searchBtn = $("#search-btn");
let showAdvanceSearchBtn = $("#advance-search-option");
let advanceSearchForm = $("#advance-search-form");
let advanceSearchBtn = $("#advance-search-btn");

let levelInput = $("#level");
let statusInput = $("#status");
let tempSearchResult = [];

//Render data
function renderJobsTableHeader(myList) {
  let trTag = "<tr>";
  for (let jobElement in myList[0]) {
    trTag += `<th>${jobElement}</th>`;
  }
  trTag += "</tr>";
  resultTable.append(trTag);
}

renderJobsTableHeader(jobs);

function renderJobsTableContent(myList) {
  for (let job of myList) {
    let trTag = "<tr>";
    for (let jobdetail in job) {
      trTag += `<th>${job[jobdetail]}</th>`;
    }
    trTag += "</tr>";
    resultTable.append(trTag);
  }
}

renderJobsTableContent(jobs);

//Basic search
searchBtn.on("click", function () {
  tempSearchResult = [];
  jobs.forEach(function (item) {
    if (
      item["jobName"].toLowerCase().includes(searchInput.val().toLowerCase())
    ) {
      tempSearchResult.push(item);
    }
  });
  if (tempSearchResult.length > 0) {
    resultTable.html("");
    renderJobsTableHeader(tempSearchResult);
    renderJobsTableContent(tempSearchResult);
  } else {
    resultTable.html("<p>Job not found</p>");
  }
});

//Advance search
showAdvanceSearchBtn.on("click", function () {
  if (advanceSearchForm.css("display") === "none") {
    advanceSearchForm.css("display", "block");
  } else {
    advanceSearchForm.css("display", "none");
  }
});

advanceSearchBtn.on("click", function() {
  let salaryRangeList = $("input[name='salary']:checked").val();

  console.log(salaryRangeList)
})


