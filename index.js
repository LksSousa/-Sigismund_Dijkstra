const gets = require('prompt-sync')();

let jewels = new Set();
let jewel;
let jewelLimited;

while (jewel = gets()) {
  jewelLimited = jewel.substring(0,105);
  jewels.add(jewelLimited);
}

console.log(jewels.size);