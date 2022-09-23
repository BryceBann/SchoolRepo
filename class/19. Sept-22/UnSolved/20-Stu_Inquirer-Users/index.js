const inquirer = require('inquirer');
const fs = require('fs')
inquirer
  .prompt([
    {
   type: 'input',
   name: 'name',
   messgae: "what is your name"
    },
    {
        type: 'input',
        name: 'name',
        messgae: "What languages do you know?"
         },
         {
            type: 'input',
            name: 'name',
            messgae: "What is your preferred method of communication?"
             }
  ]);