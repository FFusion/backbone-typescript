var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MoreView = (function (_super) {
    __extends(MoreView, _super);
    function MoreView(options) {
        this.setElement($(".car-content"));
        this.template = _.template($('#carMore').html());
        _super.call(this, options);
    }
    MoreView.prototype.initialize = function () {
        this.render();
    };
    MoreView.prototype.events = function () {
        return {
            "click #back": "back"
        };
    };
    MoreView.prototype.render = function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    };
    MoreView.prototype.back = function () {
        controller.navigate("/");
        controller.main();
    };
    return MoreView;
})(Backbone.View);
//# sourceMappingURL=MoreView.js.map