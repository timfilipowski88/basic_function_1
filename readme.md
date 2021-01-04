I predicted 13/15 correct



Predict the output of the following code snippets.  Please do NOT run any of this code directly, but first predict the output using the T-diagram.  If you're not used to using the T-diagram to run through the code yet, please get comfortable now.  This will help you down the line.  Once you've predicted the output for all of the codes, then run the code one by one and compare the two.

Please turn in a text file that includes your prediction for each problem and the actual output. At the top of the file, indicate how many out of 15 you predicted correctly.

function a(){
    return 35;
}
console.log(a())


function a(){
    return 4;
}
console.log(a()+a());


function a(b){
    return b;
}
console.log(a(2)+a(4));


function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));


function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));


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


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));


function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);


























