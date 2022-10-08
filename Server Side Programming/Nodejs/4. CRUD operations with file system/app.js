const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files')
const filepath = `${dirPath}/apple.txt`

// writing in file
fs.writeFileSync(filepath, 'This is a simple file');

// reading from file
fs.readFile(filepath, 'utf8', (err, item) => {
    console.log(item) // shows buffer too
})

// appending in file
fs.appendFile(filepath, 'appended data', (err) => {
    if (!err) console.log('file is updated')
})

// rename file
fs.rename(filepath, `${dirPath}/fruit.txt`, (err) => {
    if (!err) console.log("file name is updated")
})

// deleting file
fs.unlinkSync(`${dirPath}/fruit.txt`)

/* Buffer is a temporary memory location,
 which Node uses to perform its operations.
*/