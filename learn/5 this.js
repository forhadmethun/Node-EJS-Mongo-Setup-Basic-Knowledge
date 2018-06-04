var forhad = {
    printFirstName: function(){
        console.log("My First Name is Forhad");
        console.log(this === forhad);
    }
}
forhad.printFirstName();


// 'global 'calling context rather than 'this'
function doSomethingWorthless(){
    console.log(this==global);
}
doSomethingWorthless();