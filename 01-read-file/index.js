const path = require('path');
const fs = require('fs');
// const { channel } = require('diagnostics_channel');

const filePath =  path.join(__dirname, 'text.txt');

const readStreamFile = fs.createReadStream( filePath, 'utf-8');
readStreamFile.on('data', chunk => console.log(chunk))

