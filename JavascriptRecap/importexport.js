//This is the old way in which you would export your code
const testArr = ["chancho1","chancho2","chancho3"];
//module.exports = testArr;

//this is the new way to export
export default testArr;
export const testArr2 = ["chanchoTest1","chanchoTest2"];
const testArr3 = ["chanchillo","chanchollo"];
const testArr4 = ["chanch"];
export {
    testArr3,
    testArr4
};