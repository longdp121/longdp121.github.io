let inputScore = $("#score");
let btn = $("#btn");
let resultTag = $("#result");

btn.on("click", function () {
  let score = inputScore.val();
  let result = "";
  let color = "";
  if (score >= 6 && score <= 8) {
    result = "Gioi";
    color = "green"
  } else if (score >= 4 && score < 6) {
    result = "Dat";
    color = "yellow"
  } else if (score < 4) {
    result = "Khong dat";
    color = "red"
  }
  resultTag.html(`<p style="color: ${color}">${result}</p>`)
});
