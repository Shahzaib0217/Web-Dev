const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Files');

// creating files
for (let i = 0; i < 3; i++) {
    fs.writeFileSync(dirPath + "/newfile" + i + ".txt", "a simple text file");
}

//Now, reading directory
fs.readdir(dirPath, (err, files) => {
    //for each prints each file separately
    files.forEach((item) => {
        console.log("file name is: ", item)
    })
    //or 
    // console.warn(files) 
    // it prints files in form of an array
})

// Interview question:
//Q) can we access files outside our webserver.
/* when we run node in a folder it becomes a web server. (apny ap ma ek environment hota ha)
 we cant access files outside our web server or this environment.
 if my server is in E drive i cant access files in C,D or outside the server.

 for example: a website cant access data outside its server (or from other servers)
 */