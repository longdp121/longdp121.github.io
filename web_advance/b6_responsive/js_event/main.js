function clickButton() {
  let selectCity = document.getElementById("provinde").innerText;
  let selectDistric = document.getElementById("distric").innerText;

  console.log(`City: ${selectCity}, distric: ${selectDistric}`)
}


// console.log(cities.haiphong)

function listenInputChange(event) {
    const cities = {
        "hanoi" : ["Ba Dinh", "Hoan Kiem", " Hai Ba"],
        "haiphong": ["Hai Phong", "Hai Phong 2", "Hai Phong 3"]
    }
    let city = event.target.value;
    let html = '<select name="distric" id="distric">';
    if (city == "hanoi") {
        for (let distric of cities.hanoi) {
            console.log(cities.city)
            html += `<option>${distric}</option>`
        }
    } else if (city == "haiphong") {
        for (let distric of cities.haiphong) {
            html += `<option>${distric}</option>`
        }
    }
    html += '</select>';
    document.getElementById("distric").innerHTML = html
}
