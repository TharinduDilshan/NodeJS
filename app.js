console.log('Starting app.js');

//file system
const fs = require('fs');

//operating system
const os = require('os');

//validation part **just like
//const _ = require('lodash');

//my own module
//const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
    console.log('Adding new note');
}else if (command === 'list'){
    console.log('Listing all notes');
}else if (command === 'read'){
    console.log('Reading note');
}else if (command === 'remove'){
    console.log('Removing note');
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