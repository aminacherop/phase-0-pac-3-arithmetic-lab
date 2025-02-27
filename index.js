1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
function add (a, b){
return a + b;
}
function subtract (a, b){
return a - b;
}
function multiply(a, b){
return a* b;
}
function divide(a, b){
return a/b
}
number = 10;
function increment(n){
    return n += 1;
}
console.log(increment(number));
 
number = 10;
function decrement(n){
    return n -= 1;
}
console.log(decrement(number));

function makeInt(n){
    return parseInt(n,10);
}
console.log(makeInt("hello"))

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal("80.123999"));