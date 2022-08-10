// WRITE YOUR CODE HERE
var student;
student = ["bryce", "brad", "ben", "bethany", "shelby"] //adds all the names and builds the array
console.log(student.length) //show the amount of information in the array

console.log(`welcome to class ${student[0]}`) //prints the selected index of the array
console.log(`welcome to class ${student[1]}`)
console.log(`welcome to class ${student[2]}`)
console.log(`welcome to class ${student[3]}`)
console.log(`welcome to class ${student[4]}`)

student.unshift("david") //adds new name infront of the array
console.log(student)

if(student[0] === "david"){
    console.log(student[0] + " is new in class")
} // if the student name in array index is true post console messgae