let main = document.getElementById("main");
let tour = document.getElementById("tour");
let homeBtn = document.getElementById("home-btn");

function testBtn() {
    main.className = "container-fluid display-none";
    tour.className = "container-fluid";
}

function renderHomePage() {
    console.log("This is main classname before: ", main.className);
    console.log("This is tour classname before: ",tour.className)
    main.className = "container-fluid";
    tour.className = "container-fluid display-none";
    console.log(main.className);
    console.log(tour.className)
}