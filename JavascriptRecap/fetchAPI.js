const url = 'https://jsonplaceholder.typicode.com/users';

//This is the old way to use the requests, it still used.
//this is functional code
// fetch(url,{
//     method: 'POST',//POST, GET, UPDATE/PATCH, DELETE
//     headers:{
//         'Content-type':'application/json',
//         'Authorization':'Bearer acadebieeseexistiruntokendeautorizacion'
//     },
//     body: JSON.stringify({
//         name: 'Chanchito Feliz',
//         website: 'www.google.com'
//     })
// }).then((response) => {
//     return response.json()
// }).then(data => console.log(data));

//This is the new way to call requests
//This is imperative code
const makeRequest = async () => {
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': 'Bearer acadebieeseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({name: 'Chanchito alegre', website: 'www.google.com'})
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}
makeRequest();