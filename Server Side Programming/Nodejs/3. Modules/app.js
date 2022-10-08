const fs = require('fs');

// process.argv(argument vector) will store 2 paths in 1st 2 index of input array[]
// 1st path will be of the folder where node is installed
// 2nd will be of the file we are curenttly present in
/* 
console.log(process.argv);
Output:
[
  'E:\\Softwares\\nodejs\\node.exe',
  'e:\\Web-Dev\\Server Side Programming\\Nodejs\\3. fs module\\app.js'
]
*/
const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]) // file name, file data
}
else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]) // file name
}
else {
    console.log("invalid input")
}
