//--------------------------------------------------------------------------------------------------------------------------------------------------------
//Using arrow functions and functions.
//Functions: It is almost the same as using 'class'. JS is multiparadigm, uses inheritance based with prototypes.
//The 'class' keyword in the inside does this. The 'class' keyword is just sugar code.
//You have the 'this' word.
function Fn(){
    this.functAttrib1 = "This is an attribute";
    //We can ignore the return because of the 'new' keyword in the function.
    //return 'Just a testing function';
    console.log(testing());
    function testing(){
        return "yes";
    }
}
Fn.prototype.test = function functOfProto(){
    return "no";
};
//If you use the 'new' keyword the function ignores the return value, it return 'this'.
const r = new Fn();
console.log(r);
console.log(r.__proto__.test());
console.log(r.functAttrib1);
console.log(r.testing);
console.log("*******************");

//Arrow functions
const arrFunc = () => {//DOESN'T have a 'this' context.
    return 'Testing';
}
//They have a implicit return
const arr2Func = () => 145;
//Arrow functions can't be used with 'new' keyword.
const r1 = arrFunc();
console.log(r1);
console.log(arrFunc());
console.log(arr2Func());