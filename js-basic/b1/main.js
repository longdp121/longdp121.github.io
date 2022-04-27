// 1. Alert func

alert('Welcome to TechMaster!')

// Greeting func

function greeting(myString) {
    return `Xin chao ${myString}`
}

let realName = 'Batman';
alert(greeting(realName))

// Squaring

function squaring(myNum) {
    return Math.pow(myNum, 2)
}

let myNum = 10;
alert(`Square of ${myNum} is ${squaring(myNum)}`)