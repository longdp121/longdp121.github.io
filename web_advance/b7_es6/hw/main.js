let profestionOptions = document.getElementById("profestion-filters")

profestionOptions.onclick = function() {
    let a = profestionOptions.getElementsByClassName("overlay")[0];
    a.style.display = "block"
}

profestionOptions.onblur = function() {
    let a = profestionOptions.getElementsByClassName("overlay")[0];
    a.style.display = "none"
    console.log(10)
}

