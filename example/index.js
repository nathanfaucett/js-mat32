global.mat32 = require("../src/index");


var a = mat32.rotate(mat32.create(), Math.PI * 0.5),
    b = mat32.rotate(mat32.create(), Math.PI),
    c = mat32.mul(a, b, mat32.create());

console.log(c);
