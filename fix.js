const fs = require('fs');
const path = require('path');
const idxPath = path.join(__dirname, '..', '..', 'brain', '19d9bc7c-df88-46ac-b58d-c327dad9dcab', 'index.tsx');
let content = fs.readFileSync(idxPath, 'utf8');
content = content.replace(/\/images\//g, 'images/');
fs.writeFileSync(idxPath, content);
console.log('Fixed image paths');
