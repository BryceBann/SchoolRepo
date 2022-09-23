// TODO: What are we importing?
// accesing the node.js file system par 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//takes the log.txt then encoding then a function
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //if there is an error it throws an error if no error appends file
  err ? console.error(err) : console.log('Commit logged!')
);

//takes the data entered in termianl and creating a new file and adding to it
// fs.writeFile('test.txt',process.argv[2],(err)=>{
//   err?console.error(err):console.info(`successfully written ${process.argv[2]} in file test`)
// })