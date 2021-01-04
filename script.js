// Predicted 13/15 correct

function a(){
    return 35;
}
console.log(a())
// Correct - This will print 35 to the console.

function a(){
    return 4;
}
console.log(a()+a());
// Correct - This will print 8 to the console. 


function a(b){
    return b;
}
console.log(a(2)+a(4));
//  Correct - This will print 6 to the console.

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//  Correct - This will print on the following lines
// 1  3
// 2  9

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
// Correct - This will print 40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//  Correct - This will print 4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// Correct - This will print 
// 1  10, 3
// 2  30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//  Correct - This will print 
// 1  3
// 2  4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//  Incorrect - This will print 
// 1  2
// 2  4
// 3  6
// 4  8
// 5 10
// It actually prints 
// 1  2
// 2  5
// 3  8
// 4  11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//  Incorrect - This will print --> It will print this but with a second set to the 0-9 iteration
// 1  0
// 2  1
// 3  2
// 4  3
// 5  4
// 6  5
// 7  6
// 8  7
// 9  8
// 10 9
// 11 0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//  Correct - This would print 0, then 0,1,2,3,4,5,6,7,8,9 and then it would print 1 and repeat the 0,1,2,3,etc

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// Correct - This one would print 
// 0, 0
// 0, 1
// 0, 2
// etc
// 10, 0
// then the same through number 1-10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// Correct - This will print 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// Correct - This will print print 
// 1 15
// 2 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// Correct - This will print 
// 1 15
// 2 15