//easy to use and test
//sorely depends on input
//returns same results for same input
add(2,3)


//impure
//mutates state because it writes to console
//produces observable side effects

function add2(x,y){
    console.log(x+y);
    return x+y;
}