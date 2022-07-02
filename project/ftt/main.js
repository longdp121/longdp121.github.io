let tours = [
    {img: "img/tours/tour_thumb_1.jpg", name: "Food tour 1", minPrice: 25, duration: 3},
    {img: "img/tours/tour_thumb_2.jpg", name: "Food tour 2", minPrice: 25, duration: 3},
    {img: "img/tours/tour_thumb_3.jpg", name: "Food tour 3", minPrice: 25, duration: 1},
    {img: "img/tours/tour_thumb_4.jpg", name: "Food tour 4", minPrice: 2, duration: 3},
    {img: "img/tours/tour_thumb_5.jpg", name: "Food tour 5", minPrice: 5, duration: 30},
    {img: "img/tours/tour_thumb_6.jpg", name: "Food tour 6", minPrice: 215, duration: 3},
    {img: "img/tours/tour_thumb_1.jpg", name: "Food tour 7", minPrice: 255, duration: 9},
    {img: "img/tours/tour_thumb_2.jpg", name: "Food tour 8", minPrice: 25, duration: 6.8},
    {img: "img/tours/tour_thumb_3.jpg", name: "Food tour 9", minPrice: 25, duration: 6.8},
];

let main = document.getElementById("main");
let tour = document.getElementById("tour");
let rowTours = document.getElementById("row-tours");

function renderTours (arr) {
    let html = "";
    for (obj of arr) {
        html += `
        <div class="card border-0 px-4 py-4 col-lg-4 col-md-4 col-sm-6 col-sx-12">
        <div class="card-body-box">
          <img src=${obj.img} alt="tour-thumb" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <div class="row">
              <div class="col-6">
                <p><b>From: </b>$${obj.minPrice}/person</p>
              </div>
              <div class="col-6">
                <p><b>Duration: </b>${obj.duration}-hours</p>
              </div>
            </div>
            <button type="button" class="btn btn-success" onclick="testBtn()">Bấm đi</button>
          </div>
        </div>
      </div>
        `;
    }
    rowTours.innerHTML = html;
}

renderTours(tours)