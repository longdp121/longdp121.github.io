// 1. Alert func

function welcome() {
  alert("Welcome to TechMaster!");
}

// Greeting func

function greeting(myString) {
  return `Xin chao ${myString}, welcome to TechMaster!`;
}

let realName = "Batman";
console.log(greeting(realName));

// Squaring

function squaring(num) {
  return Math.pow(num, 2);
}

let myNum = 10;
<<<<<<< Updated upstream
console.log(`${myNum}^2 = ${squaring(myNum)}`);


// Sum

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(10, 44))

// Square of circle

function circleSquare(r) {
    return Math.PI * Math.pow(r, 2)
}

console.log(circleSquare(7))
=======
alert(`${myNum}^2 = ${squaring(myNum)}`)

let num = Math.ceil(101/100)
console.log(num)
>>>>>>> Stashed changes
