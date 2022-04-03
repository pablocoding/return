// Fragmento de código 1 //
function hello() {                     
    console.log('hola');                                                
}                                     
hello();
console.log('Dojo'); // result: Dojo

// variable // value  //
// hello       hola




// Fragmento de código 2 //
function hello() {
    console.log('hola');
    return 15;
}
var result = hello();
console.log('el resultado es', result); //result: el resultado eshola

// variable || value   //
// hello    ||   hola
// result   ||  hola





// Fragmento de código 3 //
function numPlus(num) {
    console.log('num es', num);
    return num+15;
}
var result = numPlus(3);
console.log('x es', result); // result: x esnum es18

// variable || value               //
//  num     ||  "num es" + num+15
//  result  ||  num es18





// Fragmento de código 4: hay un giro //
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result); // result:10
console.log(num); // result:15

// variable || value  //
// num      ||   15
// result   ||   10




// Fragmento de código 5 //
var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result); // result: 20
console.log(num);    // result: 15

// variable || value //
//  num     || 15
//  result  || 20




// Fragmento de código 6 //
function timesTwoAgain(num) {
    console.log('num es', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('el resultado es', result); // result: el resultado esnum es6num es10

// variable || value             //
//   y      ||  num es+ *2
//  result  ||  num es6num es10






// Fragmento de código 7 //
function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))  // result: 5
 console.log(sumNums(3,5)) // result:  8

 


 
 
 
 // Fragmento de código 8 //
 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3)) // result: 25
 console.log(printSumNums(3,5)) // result: 38

 
 
 
 
 
 // Fragmento de código 9 //
 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum es', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('el resultado es', result); // result: el resultado essum es5sum es8

// variable || value    //
// result   || sum es5sum es8

 




// Fragmento de código 10 //
 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum es', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('el resultado es', result); // result: el resultado essum es5sum essum es33sum es3sum es5

// variable || value               //
//  result  || sum es5sum essum es33sum es3sum es5

