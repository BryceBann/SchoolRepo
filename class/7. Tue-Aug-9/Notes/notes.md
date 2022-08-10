Basic array build adding and removale of the array elements

var students
undefined
students["bryce","caleb","lindsey"]

students=["bryce","caleb","lindsey"]
(3) ['bryce', 'caleb', 'lindsey']
0: "bryce"1: "caleb"2: "lindsey"length: 3
[[Prototype]]: Array(0)

students.pop()   //removes the last part of the array
'lindsey'

students
(2) ['bryce', 'caleb']

students.push("grant")  //adds this to the end of the array
3
students
(3) ['bryce', 'caleb', 'grant']

students.length
3
students[1]
'caleb'

console.log("The second student on the list is" + students[1])
 The second student on the list iscaleb

students[1]="tristan"
'tristan'

students
(3) ['bryce', 'tristan', 'grant']
0: "bryce"1: "tristan"2: "grant"length: 3
[[Prototype]]: Array(0)

students.push(42069)  //add information to the end of the array
4
students
(4) ['bryce', 'tristan', 'grant', 42069]

students.unshift(0)  // add information to the begining of the array
5

students
(5) [0, 'bryce', 'tristan', 'grant', 42069]

students.shift(0)  //remvoves the first part of an array
0

students
(4) ['bryce', 'tristan', 'grant', 42069]

students.splice(2,1) // can remove an exact part of the array 



Basic for loop and using and array to to make the loop x amount of times

var cars = ["ford", "honda", "nissan", "lexus"]

for(var i = 0; i<5; i++){  //repeats the code until the break point is reached (i<5)
    console.log(i)
}
 0
 1
 2
 3
 4

for(var i = 0; i<5; i+2){ //will create an inf. loop do to adding up the number will go over the break point amount 
    console.log(i)
}

for(var i = 0; i<cars.length; i++){ // will print out the amount of items in array
    console.log(cars[i])
}
    

 ford
 honda
 nissan
 lexus

for(var i = 0; i<cars.length; i++){  // will loop to the amount of times in the array and will print the console log message
    console.log(`name of the car + cars[i])
}


basic function

function helloWorld(){
    console.log("hello world")
}

helloWorld()
 hello world

 function hellWorld(name){
    console.log("hello world + name)
    return;
 }

 var sumFunction = function(number1, number2){
    var sum = number1+number2
    console.log(sum)
    return}

sumFunction(2,2)
 4

var sumFunction = function(number1, number2){
    var sum = number1+number2
    console.log(sum)
    return sum}

    console.log("the sum of 2 and 2 is " + sumFunction(2,2))
    4


scope is what a variable is limited to use 

// will combined both arrays to new array 
var students = ["alex", "brain", "mark"]

var students1 = ["brain", "tony", "bill"]

var students2 = students.concat(students1);
console.log(students2) 

