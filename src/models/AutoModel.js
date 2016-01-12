var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AutoModel = (function (_super) {
    __extends(AutoModel, _super);
    function AutoModel() {
        _super.apply(this, arguments);
    }
    AutoModel.prototype.defaults = function () {
        return {
            id: "1",
            "mark": "Ваз",
            "year": "2000",
            "mileage": 120000,
            "price": "620000",
            "clerk": "Petr",
            "phone": "Oleg"
        };
    };
    return AutoModel;
})(Backbone.Model);
var auto = new AutoModel();
//# sourceMappingURL=AutoModel.js.map