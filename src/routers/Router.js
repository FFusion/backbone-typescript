var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Router = (function (_super) {
    __extends(Router, _super);
    function Router() {
        _super.apply(this, arguments);
        this.routes = {
            "/": "main",
            "/car/:id": "car"
        };
    }
    Router.prototype.main = function () {
        $('.main-content').show();
        $('.car-content').hide();
    };
    Router.prototype.car = function () {
        $('.main-content').hide();
        $('.car-content').show();
    };
    return Router;
})(Backbone.Router);
var controller = new Router();
Backbone.history.start();
//# sourceMappingURL=Router.js.map