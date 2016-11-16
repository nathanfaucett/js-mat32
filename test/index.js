var tape = require("tape"),
    mat32 = require("..");


tape("mat32.equal(a, b)", function(assert) {
    assert.equals(mat32.equals(mat32.create(), mat32.create()), true);
    assert.end();
});

tape("mat32.setRotation(out, angle)", function(assert) {
    assert.equals(mat32.equals(
        mat32.setRotation(mat32.create(), Math.PI / 2), [0, 1, -1, 0, 0, 0]
    ), true);
    assert.end();
});

tape("mat32.rotate(out, a, angle)", function(assert) {
    assert.equals(mat32.equals(
        mat32.rotate(mat32.create(), [1, 0, 0, 1, 0, 0], Math.PI / 2), [0, 1, -1, 0, 0, 0]
    ), true);
    assert.end();
});
