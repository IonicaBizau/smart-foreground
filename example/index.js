"use strict";

const smartForeground = require("../lib");

console.log(smartForeground("black"));
// => #fffff

console.log(smartForeground("white"));
// => #00000

console.log(smartForeground("yellow"));
// => #00000

console.log(smartForeground("brown"));
// => #fffff

console.log(smartForeground("#F82125"));
// => #fffff

console.log(smartForeground("#FFC966"));
// => #00000

console.log(smartForeground("darkred", ["yellow", "#FF0057", "darkred"]));
// => yellow

console.log(smartForeground("yellow", ["yellow", "#FF0057", "darkred"]));
// => darkred

console.log(smartForeground("rgb(255, 25, 255)", ["yellow", "#FF0057", "darkred"]));
// => #FF0057
