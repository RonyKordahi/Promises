// Callback Function: a function that is passed as an argument to another function
// Higher Order Function: a function that receives a callback function as a parameter

const higherOrder = (callback) => {
    callback();
}

const logMessage = () => {
    console.log("Hello, I am a callback function!")
}

higherOrder(logMessage);