

// function randomInRange(max, min) {
//     return Math.floor(Math.random() * (max - min));
// }

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (randomInRange(1, 10) % 2 === 0) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 2000);
// }).then(() => {
//     console.log('resolved');
// }).catch(() => {
//     console.log('rejected');
// })


// let count = -10;
// let myPromise = new Promise((resolve, reject) => {
//     if (count > 0) {
//         resolve();
//     } else {
//         reject();
//     }
// }).then(() => {
//     console.log('resolved');
// }).catch(() => {
//     console.log('rejected');
// })





// let myPromise = new Promise((resolve, reject) => {

//     setTimeout((time) => {
//         return "Resolve";
//     }, time);
// }).then(() => {
//     resolve();
// }).catch(() => {
//     reject();
// });

// console.log(myPromise);


console.log(typeof('str') === 'string');