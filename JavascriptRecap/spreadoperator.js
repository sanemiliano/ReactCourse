const fn = (a,b,c) => console.log(a+b+c);

const arr = [1,2,3];

fn(...arr);

const arr1 = [4,5,6];
const arr2 = [7,8,9];

const arr3 = [...arr,...arr1,...arr2,10,11];

console.log(arr3);