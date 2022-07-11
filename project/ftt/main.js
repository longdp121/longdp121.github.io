// let tours = [
//     {tour_id: "ft1", imgThumb: "./img/tours/FoodTour1/tour_imgs/img1.jpg", name: "Food tour 1", minPrice: 25, duration: 3},
//     {tour_id: "ft2", imgThumb: "./img/tours/FoodTour1/tour_imgs/img2.jpg", name: "Food tour 2", minPrice: 25, duration: 3},
//     {tour_id: "ft3", imgThumb: "./img/tours/FoodTour1/tour_imgs/img3.jpg", name: "Food tour 3", minPrice: 25, duration: 1},
//     {tour_id: "ft4", imgThumb: "./img/tours/FoodTour1/tour_imgs/img4.jpg", name: "Food tour 4", minPrice: 2, duration: 3},
//     {tour_id: "ft5", imgThumb: "./img/tours/FoodTour1/tour_imgs/img5.jpg", name: "Food tour 5", minPrice: 5, duration: 3},
// ];

let tours = [
  {
    tour_id: "FT",
    name: "Hanoi Street Food Tours",
    imgThumb: "./img/tours/FoodTour1/tour_thumb.jpg",
    img: [
      "img/tours/FoodTour1/tour_imgs/img1.jpg1",
      // "img/tours/FoodTour1/tour_imgs/img2.jpg",
      // "img/tours/FoodTour1/tour_imgs/img3.jpg",
      // "img/tours/FoodTour1/tour_imgs/img4.jpg"
    ],
    minPrice: 25,
    duration: 3,
    itinerary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula eu lectus vel consectetur. Maecenas eu quam et magna malesuada tincidunt. Praesent massa nunc, commodo at commodo non, placerat at tortor. Vivamus imperdiet ex vel cursus mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet dui a iaculis aliquam. Maecenas consectetur vitae lacus ac mollis. Integer ac nisi et enim consectetur vulputate. Phasellus dictum ligula augue, eget commodo dolor tincidunt et.",
    price: {
      group: 25,
      private: {
        1: 40,
        2: 35,
        3: 30,
        4: 30,
        5: 30,
        6: 25
      }
    }
  }
]

/////////// Creat function

//###### App function
function getTourById(id, arr) {
  let tour = arr.find(function (obj) {
    return obj.tour_id === id;
  })
  return tour
}

function renderTourfromTourObj(obj) {
  let tourImgs = document.getElementById("tourImgs");
  console.log(tourImgs)
  let imgs = obj.img;
  let html = "";
  imgs.forEach(function(img) {
    html += `<img src=${img} alt="tour_imgs">`
  })
  tourImgs.innerHTML = html;
  let tourDetails = document.getElementById("tourDetails");
  tourDetails.innerHTML = `
    <h1>${obj.name}</h1>
    <p>From: $${obj.minPrice}/person</p>
    <p>${obj.duration}-hours</p>
  `;
  let navItinerary = document.getElementById("navItinerary");
  navItinerary.innerText = obj.itinerary;
  for (let key in obj.price) {
    console.log(key)
    console.log(obj.price[key])
  }
}

// renderTourfromTourObj(tour)

//###### Renderers
function renderTourNavs(arr) {
  let navbarDropdownTours = document.getElementById("navbarDropdownTours").nextElementSibling;
  let html = "";
  arr.forEach(function (obj) {
    html += `<li><a class="dropdown-item" href="#" id="navbarDropdownTours_tourId.${obj.tour_id}" onclick="viewTourBtn()">${obj.name}</a></li>`
  })
  navbarDropdownTours.innerHTML = html
}

function renderTourCards(arr) {
  let rowTours = document.getElementById("row-tours");
  let html = "";
  arr.forEach(function (obj) {
    html += `
      <div class="card border-0 px-4 py-4 col-lg-4 col-md-4 col-sm-6 col-sx-12" id="tourCard_tourId.${obj.tour_id}">
        <div class="card-body-box">
          <img src=${obj.imgThumb} alt="tour-thumb" class="card-img-top">
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
            <button type="button" class="btn btn-success" id="viewTourBtn_tourId.${obj.tour_id}" onclick="viewTourBtn()">View Tour</button>
          </div>
        </div>
      </div>    
    `
  });
  rowTours.innerHTML = html;
}

//###### Buttons
function viewTourBtn() {
  let tourClickedId = event.target.id.slice(-2)
  let main = document.getElementById("main");
  let tour = document.getElementById("tour");
  main.className = "container-fluid display-none";
  tour.className = "container-fluid";
  let tourClicked = getTourById(tourClickedId, tours);
  console.log(tourClicked)
  renderTourfromTourObj(tourClicked)
}

function showHomeBtn() {
  let main = document.getElementById("main");
  let tour = document.getElementById("tour");
  main.className = "container-fluid";
  tour.className = "container-fluid display-none";
}

// /////// Run function
renderTourCards(tours)
renderTourNavs(tours)