// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 49);
var expression2 = (x > 45);

// Write Your JavaScript Code Here

if(expression1 && expression2){
    console.log("True ✅ True ✅")
}else if(!expression1 && !expression2){
    console.log("False ❌ False ❌") //could delte thsi whole else if
}else if(expression1){
    console.log("True ✅ False ❌")
}else if(expression2){
    console.log("Flase ❌ True ✅")
}



//other option to get same results as above 
if(expression1 && expression2){
    console.log("True✅ True✅")
}

else if(expression1){
    console.log("True✅ Flase❌")
}

else if(expression2){
    console.log("Flase ❌ True ✅")
}

else{
    console.log("False ❌ False ❌")
}






//example of if and else if
/*
var hungerLevel = 50;
if(hungerLevel >= 50){
    console.log("I am hungry")
}else{
    console.log("I am not hungry")
}


var hungerLevel = 99;
if(hungerLevel == 50){
    console.log("I am hungry")
}else if(hungerLevel >= 80){
console.log("I am extremly hungry")
}else{
    console.log("not hungry")
}
   */
