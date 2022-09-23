const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
   type: 'input',
   name: 'name',
   messgae: "what is your name",
    },
    {
        type: 'checkbox',
        messgae: "What languages do you know?",
        name: 'stack',
        choices: ['HTML', 'CSS', 'Javascript', 'MySql']
         },
         {
            type: 'list',
            messgae: "What is your preferred method of communication?",
            name: 'contact',
            choices: ['email','phone', 'telekinesis']
           
             }
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });