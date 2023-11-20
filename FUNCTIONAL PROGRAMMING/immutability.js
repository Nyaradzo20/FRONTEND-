//consistant and cant be changed

//example(mutable)
let sal = "olla";


//immutable(not changing)
const sol = "ola";

//object.freeze makes objects and arrays freeeze

const ind= Object.freeze[0,1,2,3,4,5,6,7]

function addElement(arr){
    //cant use push coz its frozen
    //create new array spread and return new array
    return Object.freeze([...arr,arr.length]);
}
addElement(addElement(ind));