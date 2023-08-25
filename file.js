// For working with file handling we require a built in module in node js is fs (file system)
const fs = require("fs");
const os = require("os");

// console.log(os.cpus());

// Eg1. writeFileSync -> Synchronous call
fs.writeFileSync("./test.txt", "Hello world, this is test file"); 

// Eg2. writeFile -> Asynchronous Call
fs.writeFile("./test.txt", "This is asyn write File fn", (err) => {});

// Eg3. readFileSync -> Synchronous Call
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

// Eg4. readFile -> Asynchronous Call
fs.readFile("./contact.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("ERR:", err);
    } else {
        console.log(data);
    }
})

// Eg5. appendFileSync -> Synchronous call
fs.appendFileSync("./test.txt", "\nThis is next line");


