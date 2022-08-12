//WRITE YOUR CODE BELOW
var customerOrder = {
    name:"Frank",
    numberSuagar:10,
    drinkReady:true
}
console.log(customerOrder);

if(customerOrder.drinkReady){
    console.log("Read for pick-up: " + customerOrder.name + " with " + customerOrder.numberSuagar + " sugars");
}else{
    console.log("still in order que")
}

