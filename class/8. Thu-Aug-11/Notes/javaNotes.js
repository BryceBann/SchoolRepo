//LEarnign about objects

var planet = {
    name:"Earth",
    hasMoon:true,
    numOfMoons:1,
    isPopulated:true,
    hasSeenExtinction:true,
    population:"7 billion"
}

planet(isPopulated)
planet.isPopulated;
//should show specfic object info

console.log(planet);
//would log all the info in the object

// main to use to store major ammounts of data with specfic catagories


var moon = {
    name:"Pluto",
    hasMoon:false,
    numOfMoons:0,
    isPopulated:false,
    hasSeenExtinction:true,
    population:"no one",
    nearbyPlanets:["venus","mars"],
    tellAFunFact: function(){   //making a function inside and object to call for specfic propertieds
        console.log("Pluto is round","Pluto is cold");
    }
}

moon.tellAFunFact()[1] //calling the name of the object then calling the specfic part of the function

var test ={
    name:"test",
    age: 69,
    goodPerson:false,
    testFacts: function(){
        console.log("this is a good person " + this.goodPerson) // this will call inside the object and go to the properties

    }
}


var star = {
    name: "sun",
    age: 74849578304754,
    isPopulated: false,
    population: "null",
    logFacts: function(){
        console.log("This planet name is " + this.name) //
    }
}

window.alert // will display pop up message to webpage 

window.confirm //another form of pop up massage window with ok and cancel button

window.prompt //will ask for a user input in a pop up window

getElementById // way of java script to get a html element

innerHTML //