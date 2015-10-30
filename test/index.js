var tape = require("tape"),
    mat32 = require("..");


tape("mat32.equal(a, b)", function(assert) {
    assert.equals(mat32.equal(mat32.create(), mat32.create()), true);
    assert.end();
});
