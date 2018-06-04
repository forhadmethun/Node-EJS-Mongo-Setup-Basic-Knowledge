
//creating object
var personObject = {
    firstName: 'Forhad',
    lastName : 'Methun',
    age: 24
}

console.log(personObject);

//function
function addTwoNumber(a,b){
    return a+b; //if we don't return from any function then it returns undefined
}
console.log(addTwoNumber(2,3));


//assign function to variable

var printBacon = function(){  //anonymous function
    console.log("Bacon is healthy, don't believe that");
}

setInterval(printBacon,1000);










