const chalk = require('chalk');
const yargs = require('yargs');
//const validator = require('validator')
//import validator from 'validator'; // not supported
const getNotes = require('./notes.js');

//customize yargs version
//yargs.version('2.0.1');

//create a add command
yargs.command({
    command : 'add',
    describe : 'Add a note',
    handler: function(){
        console.log('Adding a new Note.!!');
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('removing a note.');
    }
})

//create a list command
yargs.command({
    command:'list',
    describe:'List all notes',
    handler: function(){
        console.log('Listing all Notes.');
    }
})

//create a read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading the notes.')
    }
})
console.log(yargs.argv);


//console.log(process.argv);
// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding a note');

// }else if (command === 'remove'){
//     console.log('removing a note!!');
// }

// const msg = getNotes();
// console.log(chalk.cyan(msg));

//console.log(validator.isEmail('raghu@gmail.com'));
//console.log(validator.isURL('htt//example.com'));
// console.log(chalk.bold.red('hi '.toUpperCase()), chalk.blue('you'.toUpperCase()),chalk.bold.yellow.bgGreen('there!!!'), chalk.dim.greenBright('it\'s dim'));
// console.log(chalk.red(process.argv[2]))



// const add = require('./utils.js');
// const sum = add(8,4);
// console.log(sum);


