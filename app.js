console.log('Starting app.js');

//file system
const fs = require('fs');

//operating system
const os = require('os');

//validation part **just like
const _ = require('lodash');

const yargs = require('yargs');
const argv = yargs.argv;

//my own module
const notes = require('./notes.js');


//var command = process.argv[2];
var command = argv._[0];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add'){
   // console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
}else if (command === 'list'){
   // console.log('Listing all notes');
    notes.getAll();
}else if (command === 'read'){
   // console.log('Reading note');
    notes.getNote(argv.title);
}else if (command === 'remove'){
   // console.log('Removing note');
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized');
}


/*
var filteredArray = _.uniq(['Tharindu',1,'Tharindu',1,2,3,4]);
console.log(filteredArray);
*/

/*
console.log(_.isString(true));
console.log(_.isString('Andrew'));
*/

/*
var user = os.userInfo();
console.log(user);
*/

/*
var res = notes.addNote();
console.log(res);
*/

/*
console.log('Result:', notes.add(9, -2));
*/

/*
fs.appendFile('greetings.txt','Hello '+user.username+ '!', function (err){
    if(err){
        console.log('Unable to write to file');
    }
});
*/

/*
fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, function (err){
    if(err){
        console.log('Unable to write to file');
    }
});
*/