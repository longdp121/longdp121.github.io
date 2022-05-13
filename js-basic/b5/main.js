// Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:

function autoDate() {
  let date = new Date();
  return [date.getDate(), date.getMonth(), date.getFullYear()];
  // return [10, 'December', 2055]
}

function season() {
  let month = autoDate()[1];
  let seasonName;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month >= 2 && month <= 4) {
    seasonName = "Spring";
  } else if (month >= 5 && month <= 7) {
    seasonName = "Summer";
  } else if (month >= 8 && month <= 10) {
    seasonName = "Fall";
  } else {
    seasonName = "Winter";
  }
  document.write(
    `<p>
    ${autoDate()[0]} ${months[month]} ${autoDate()[2]} is ${seasonName}
    </p>`
  );
}

// 
