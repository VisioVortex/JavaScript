// 6. Write a JavaScript program to calculate the average of numbers in an array.
// let marks = [80,77,88,100,66,81,77,33,55,88,44,10,1,5,1,8,4];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`Average marks: ${avg}`);


// 
let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items){
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`Value of items after offer: ${items[i]}`);
    i++;
}
