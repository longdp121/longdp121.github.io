let tours = [
    {tour_id: 1, img: "img/tours/tour_thumb_1.jpg", name: "Food tour 1", minPrice: 25, duration: 3},
    {tour_id: 2, img: "img/tours/tour_thumb_2.jpg", name: "Food tour 2", minPrice: 25, duration: 3},
    {tour_id: 3, img: "img/tours/tour_thumb_3.jpg", name: "Food tour 3", minPrice: 25, duration: 1},
    {tour_id: 4, img: "img/tours/tour_thumb_4.jpg", name: "Food tour 4", minPrice: 2, duration: 3},
    {tour_id: 5, img: "img/tours/tour_thumb_5.jpg", name: "Food tour 5", minPrice: 5, duration: 3},
    {tour_id: 6, img: "img/tours/tour_thumb_6.jpg", name: "Food tour 6", minPrice: 21, duration: 3},
    {tour_id: 7, img: "img/tours/tour_thumb_1.jpg", name: "Food tour 7", minPrice: 25, duration: 9},
    {tour_id: 8, img: "img/tours/tour_thumb_2.jpg", name: "Food tour 8", minPrice: 25, duration: 6},
    {tour_id: 9, img: "img/tours/tour_thumb_3.jpg", name: "Food tour 9", minPrice: 25, duration: 6},
];

let main = document.getElementById("main");
let tour = document.getElementById("tour");
let rowTours = document.getElementById("row-tours");
let tourImgThumb = document.getElementById("tour-img-thumb");

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
            <button type="button" class="btn btn-success" id="show-tour-btn-id${obj.tour_id}" onclick="viewTourBtn()">View Tour</button>
          </div>
        </div>
      </div>
        `;
    }
    rowTours.innerHTML = html;
}

renderTours(tours)

function viewTourBtn () {
    let tourId = document.getElementById("tour");
    let tourImgThumb = document.getElementById("tour-img-thumb")
    let tourDetails = document.getElementById("tour-details");
    main.className = "container-fluid display-none";
    tourId.className = "container-fluid";
    let tourClickedId = event.target.id.slice(16);
    let html = "";
    let img = "";
    let tour = tours.find(function(tour) {
        return tour.tour_id == tourClickedId;
    })
    console.log(tour);
    html += `
    <h1>${tour.name}</h1>
    <p>From: $${tour.minPrice}/person</p>
    <p>${tour.duration} hours tour long.</p>
    `;
    img += `
    <img src=${tour.img} alt="tour-img">
    `;
    tourDetails.innerHTML = html;
    tourImgThumb.innerHTML = img;
}

function showHomePage() {
    main.className = "container-fluid";
    tour.className = "container-fluid display-none";
}