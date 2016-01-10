!function() {
    const n = 514, t = 519, e = 7680, c = 7681;
    var i = require("nanogl-state/config");
    i.prototype.quickStencilMask = function() {
        this.enableStencil(!0).stencilFunc(t, 1, 255).stencilOp(e, e, c).stencilMask(255).colorMask(!1, !1, !1, !1).depthMask(!1);
    }, i.prototype.quickStencilTest = function() {
        this.enableStencil(!0).stencilFunc(n, 1, 255);
    };
}();