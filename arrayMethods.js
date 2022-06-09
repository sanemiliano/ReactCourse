//This are two very commonly used methods of the arrays.
const arr = [5,1,2,3,4,5];

//FILTER
//This method returns an array filtered based in some criteria.
const a = arr.filer((element, index) =>{
    return element > 2;
});
console.log('Filtered array');
console.log(a);

//MAP
//This method runs each element through a function
const users = [
    {id: 1, name: 'Chanchito Feliz'},
    {id: 2, name: 'Chanchito Triste'},
    {id: 3, name: 'Chanchito Emocionado'},
]
//Making a simulation on how we'll use this method in react.
const mappedUsers = users.map((user) => {
    `<h1>${user.name}<h1>`
});
console.log('Mapped array of users');
console.log(mappedUsers);