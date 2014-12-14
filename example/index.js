global.mat32 = require("../src/index");


var a = mat32.create(),
    b = mat32.create(),
    c = mat32.create();

mat32.rotate(a, a, Math.PI * 0.5);
mat32.rotate(b, b, Math.PI);
mat32.mul(c, a, b);

console.log(c);
