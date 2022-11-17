const  os = require("os");
console.log("os,freemem:", os.freemem());
console.log("os,totalmem:", os.totalmem());
console.log("os,homedir:", os.homedir());

const path = require("path")
const file =__filename;
console.log("path.delimiter:", file.split(path.delimiter));
console.log("path.extname:", path.extname(file));
console.log("path.sep:", file.split(path.sep));