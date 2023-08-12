// Callback Hell: A callback inside a callback inside a callback inside a callback inside...
// Pyarmid of DOOM: See "Callback Hell".

// Callback hell / pyramid of doom happen when too many things are nested into each other. The code starts to shift to the right gradually and consistently.

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// const logMessage = (message, callback) => {
//     console.log(message);
//     callback();
// }

// logMessage("Let me tell you a story", () => {
//     logMessage("Of a dog named Bruno.", () => {
//         logMessage("Bruno wanted to go to Mars", () => {
//             logMessage("But he didn't have a rocket ship", () => {
//                 console.log("The End.");
//             })
//         })
//     })
// })

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// const addNumbers = (num1, num2) => {
//     console.log(`The numbers are ${num1} and ${num2}`);
//     return num1 + num2;
// }

// console.log(
//     addNumbers(
//         10,
//         addNumbers(
//             5,
//             addNumbers(
//                 1,
//                 addNumbers(
//                     8,
//                     addNumbers(
//                         1000,
//                         addNumbers(1, 2)
//                     )
//                 )
//             )
//         )
//     )
// )

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// if(0 < 1) {
//     if(2 < 3) {
//         if(4 < 5) {
//             if(6 < 7) {
//                 if(8 < 9) {
//                     console.log("You made it to the tip of the pyramid!");
//                 }
//             }
//         }
//     }
// }