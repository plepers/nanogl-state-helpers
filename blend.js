!function() {
    var n = require("nanogl-state/config"), e = n.prototype;
    e.blendAlpha = function() {
        return this.enableBlend(!0), this.blendFunc(770, 771), this;
    }, e.blendAdd = function() {
        return this.enableBlend(!0), this.blendFunc(1, 1), this;
    }, e.blendMultiply = function() {
        return this.enableBlend(!0), this.blendFunc(0, 768), this;
    }, e.blendErase = function() {
        return this.enableBlend(!0), this.blendFunc(0, 771), this;
    }, e.blendMask = function() {
        return this.enableBlend(!0), this.blendFunc(0, 770), this;
    };
}();