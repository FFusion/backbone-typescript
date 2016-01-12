var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        _super.call(this);
        this.setElement($(".auto-list"));
        cars.fetch({ reset: true });
    }
    MainView.prototype.initialize = function () {
        _.bindAll(this, 'addCar');
        // атрибуты модели
        this.mark = $('#mark');
        this.year = $('#year');
        this.mileage = $('#mileage');
        this.price = $('#price');
        this.clerk = $('#clerk');
        this.phone = $('#phone');
        cars.on('add', this.addCar, this);
        cars.on('reset', this.render, this);
    };
    MainView.prototype.events = function () {
        return {
            "click #add": "createNewCar"
        };
    };
    MainView.prototype.render = function () {
        cars.each(this.addCar);
        return this;
    };
    MainView.prototype.addCar = function (auto) {
        var viewCar = new AutoView({ model: auto });
        $('.auto-list > table > tbody').append(viewCar.render().el);
    };
    MainView.prototype.createNewCar = function () {
        // добавляем модель в коллекцию
        cars.create({
            id: cars.nextNumber(),
            mark: this.mark.val(),
            year: this.year.val(),
            mileage: this.mileage.val(),
            price: this.price.val(),
            clerk: this.clerk.val(),
            phone: this.phone.val()
        });
        this.mark.val('');
        this.year.val('');
        this.mileage.val('');
        this.price.val('');
        this.clerk.val('');
        this.phone.val('');
    };
    return MainView;
})(Backbone.View);
//# sourceMappingURL=AppView.js.map