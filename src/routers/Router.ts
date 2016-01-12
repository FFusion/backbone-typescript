class Router extends Backbone.Router {
    routes:Backbone.RoutesHash = {
        "/"         : "main",
        "/car/:id"  : "car"
    }

    main() {
        $('.main-content').show();
        $('.car-content').hide();
    }

    car() {
        $('.main-content').hide();
        $('.car-content').show();
    }
}

var controller = new Router();
Backbone.history.start();