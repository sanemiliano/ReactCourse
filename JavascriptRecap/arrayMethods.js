//This are some very commonly used methods of the arrays.
const array = [5,1,2,3,4,5];
//-------------------------------------------

//FILTER
//This method returns an array filtered based in some criteria.
const a = array.filter((element, index) =>{
    return element > 2;
});
console.log('Filtered array:');
console.log(a);
//-------------------------------------------

//MAP
//This method runs each element through a function
const users = [
    {id: 1, name: 'Chanchito Feliz'},
    {id: 2, name: 'Chanchito Triste'},
    {id: 3, name: 'Chanchito Emocionado'},
]
//Making a simulation on how we'll use this method in react.
const mappedUsers = users.map((user) => {
    return `<h1>${user.name}<h1>`;
});
console.log('Mapped array of users:');
console.log(mappedUsers);
//-------------------------------------------

//REDUCE
//We can sum are elements of an array, delete duplicates, run promises in sequence, create a string, etc.
const reducedArray = array.reduce((accumulatedValue,element,currentIndex,mainArray) =>{
    return accumulatedValue + element;
});
console.log("Reduced array calculating the sum:");
console.log(reducedArray);