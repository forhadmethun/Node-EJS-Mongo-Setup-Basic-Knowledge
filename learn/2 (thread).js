function placeAnOrder(orderNumber){
    console.log("Customer order: " + orderNumber);
    cookAndDeliver(function(){
        console.log("Delivered Food Order: " + orderNumber);
    })
}
function cookAndDeliver(callback){
    setTimeout(callback,5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);