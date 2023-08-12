// Promise.race(): takes an array of promises and waits for the first promise in the array to complete before resolving or rejecting based on it's result.

const arrayOfPromises = [];

for(let i = 0; i < 5; i++) {
    
    const promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // resolve a random number between 0 and 100
            resolve(Math.floor(Math.random() * 100));

            // wait a random amount of time between 0 and 5 seconds
        }, Math.floor(Math.random() * 5000))
    })

    arrayOfPromises.push(promise);
}

Promise.race(arrayOfPromises)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log("SOMETHING WENT WRONG!");
    })

// console.log("AFTER PROMISE.ALL!");