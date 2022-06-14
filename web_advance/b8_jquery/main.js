let inputScore = $("#score");
let btn = $("#btn");
let resultTag = $("#result");

btn.on("click", function () {
  let score = inputScore.val();
  if (score >= 6 && score <= 8) {
    resultTag.html(`<p style="color: green">Gioi</p>`);
  } else if (score >= 4 && score < 6) {
    resultTag.html(`<p style="color: yellow">Dat</p>`);
  } else if (score < 4) {
    resultTag.html(`<p style="color: red">Khong dat</p>`);
  }
});
