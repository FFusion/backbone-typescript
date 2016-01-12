var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AutoCollection = (function (_super) {
    __extends(AutoCollection, _super);
    function AutoCollection() {
        _super.apply(this, arguments);
        this.localStorage = new Store("cars");
    }
    AutoCollection.prototype.nextNumber = function () {
        if (!this.length)
            return 1;
        return this.last().get('id') + 1;
    };
    return AutoCollection;
})(Backbone.Collection);
var cars = new AutoCollection();
//# sourceMappingURL=AutoCollections.js.map