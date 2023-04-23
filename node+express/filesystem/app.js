// const fs = require('fs');



// fs.writeFileSync('notes.txt', 'My name is Ayodeji Felix Oladoyin.')



// require('./app2.js')


const auth = require('./app2');
const {username, pass} = auth;
console.log(username, pass);