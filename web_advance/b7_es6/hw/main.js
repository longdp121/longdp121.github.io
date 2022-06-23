let jobs = [
  {
    logo: "",
    title: "Coder",
    company: "FPT",
    pro: "IT",
    location: "Hanoi",
    salaryRange: "From 3.000.000d",
    positon: "Staff",
    postDate: new Date(2022, 1, 7),
    jobStatus: "Fulltime",
    offer: ["Laptop", "Tour"],
  },
  {
    logo: "",
    title: "Biker",
    company: "Grab",
    pro: "Transport",
    location: "Hanoi",
    salaryRange: "From 7.000.000d",
    positon: "Freelance",
    postDate: new Date(2022, 2, 7),
    jobStatus: "Fulltime",
    offer: [],
  },
  {
    logo: "",
    title: "Chef",
    company: "KFC",
    pro: "F&B",
    location: "Danang",
    salaryRange: "From 10.000.000d",
    positon: "Intern",
    postDate: new Date(2022, 5, 7),
    jobStatus: "Parttime",
    offer: ["Tour", "Insurance"],
  },
];

let filterBtn = document.getElementById("filter-btn");
let advanceSearchForm = document.getElementById("advance-search");
let salaryRangeInput = document.getElementById("salary-range");
let jobPositionInput = document.getElementById("job-position");
let dateRangeInput = document.getElementById("date-range");
let jobStatusInput = document.getElementById("job-status");
let offerInput = document.getElementById("offer");
let clearFilterBtn = document.getElementById("del-filter-btn");
let hideAdvanceSearchBtn = document.getElementById("hide-advance-search-btn");

// Render table


//Hide, show, clear btns

filterBtn.onclick = () => {
  let display = advanceSearchForm.style.display;
  if (display === "none") {
    advanceSearchForm.style.display = "flex";
  } else {
    advanceSearchForm.style.display = "none";
  }
};

hideAdvanceSearchBtn.onclick = () => {
  advanceSearchForm.style.display = "none";
};

clearFilterBtn.onclick = () => {
  salaryRangeInput.value = "";
  jobPositionInput.value = "";
  dateRangeInput.value = "";
  jobStatusInput.value = "";
  offerInput.value = "";
};

let date1 = new Date(2022, 1, 6)
let date2 = new Date(2022, 1, 7)

function countDateBetween(d1, d2) {
    let result = (d2 - d1) / (1000 * 3600 * 24)
    console.log(result)
}

countDateBetween(date1, date2)
