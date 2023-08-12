// 3 different states:
// - pending
// - resolved
// - rejected

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// const promise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         const randomNumber = Math.floor(Math.random() * 100);

//         if(randomNumber >= 50) {
//             resolve("The number is bigger than 50!");
//         }
//         else {
//             reject("The number is smaller than 50! :(");
//         }

//     }, 500)

// })

// console.log(promise) // still pending
// promise
//     .then((result) => {
//         console.log("SUCCESS!")
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log("FAILURE!");
//         console.log(err);
//     })

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// const fs = require("fs");

// const fsPromises = fs.promises;

// fsPromises.readFile("./hello.txt")
//     .then((result) => {
//         return String(result);
//     })
//     .then((result) => {
//         return result.split(" ");
//     })
//     .then((splitResult) => {
//         return splitResult.join("----------------");
//     })
//     .then((joinedResult) => {
//         console.log(joinedResult);
//     })
//     .catch(err => {
//         console.log("SOMETHING BROKE! ", err);
//     })