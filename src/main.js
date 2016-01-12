///<reference path="../typing/all.d.ts"/>
$(function () {
    new MainView();
});
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
var snackHelpers = (function () {
    function snackHelpers() {
    }
    snackHelpers.prototype.shack = function (options) {
        return $.snackbar(options);
    };
    return snackHelpers;
})();
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
var AutoView = (function (_super) {
    __extends(AutoView, _super);
    function AutoView(options) {
        this.tagName = 'tr';
        _super.call(this, options);
        this.template = _.template($('#car').html());
        this.initialize();
    }
    AutoView.prototype.initialize = function () {
        //первый вариант прослушки события
        this.model.on('change', this.render, this);
        //второй вариант прослушки события
        this.listenTo(this.model, 'destroy', this.remove);
        //        this.model.view = this;
    };
    AutoView.prototype.events = function () {
        return {
            "click #delete": "deleteCar",
            "click #look": "lookMore"
        };
    };
    AutoView.prototype.render = function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    };
    AutoView.prototype.deleteCar = function () {
        this.model.destroy();
        var message = new snackHelpers();
        message.shack({ content: "Успешно удалено", style: "toast text-center", timeout: 2000 });
    };
    AutoView.prototype.lookMore = function () {
        controller.car();
        var viewMore = new MoreView({ model: this.model });
    };
    AutoView.prototype.remove = function () {
        this.$el.remove();
        return this;
    };
    return AutoView;
})(Backbone.View);
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
//# sourceMappingURL=main.js.map