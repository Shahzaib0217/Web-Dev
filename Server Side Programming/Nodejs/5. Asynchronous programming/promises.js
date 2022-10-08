// promises are used to handle async data

let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 30 will be returned by waitingData (promise) after 2 secs
        // promise will be resolved when 30 will be returned
        resolve(30)
    }, 2000)
})

// .then() runs after promise is resolved
waitingData.then((data) => { // data in parameter is value returned by promise (data = 30)
    b = data; // b=30
    console.log(a + b) // output: 40
})