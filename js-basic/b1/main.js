// 1. Alert func

alert('Welcome to TechMaster!')

// Greeting func

function greeting(myString) {
    return `Xin chao ${myString}`
}

let realName = 'Batman';
alert(greeting(realName))

// Squaring

function squaring(num) {
    return Math.pow(num, 2)
}

let myNum = 10;
alert(`${myNum}^2 = ${squaring(myNum)}`)