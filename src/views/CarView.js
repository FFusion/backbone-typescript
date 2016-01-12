var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarView = (function (_super) {
    __extends(CarView, _super);
    function CarView(options) {
        this.tagName = 'tr';
        _super.call(this, options);
        this.template = _.template($('#car').html());
        this.initialize();
    }
    CarView.prototype.initialize = function () {
        //первый вариант прослушки события
        this.model.on('change', this.render, this);
        //второй вариант прослушки события
        this.listenTo(this.model, 'destroy', this.remove);
        //        this.model.view = this;
    };
    CarView.prototype.events = function () {
        return {
            "click #delete": "deleteCar",
            "click #look": "lookMore"
        };
    };
    CarView.prototype.render = function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    };
    CarView.prototype.deleteCar = function () {
        this.model.destroy();
        var message = new snackHelpers();
        message.shack({ content: "Успешно удалено", style: "toast text-center", timeout: 2000 });
    };
    CarView.prototype.lookMore = function () {
        controller.car();
        var viewMore = new MoreView({ model: this.model });
    };
    CarView.prototype.remove = function () {
        this.$el.remove();
        return this;
    };
    return CarView;
})(Backbone.View);
//# sourceMappingURL=CarView.js.map