
class AutoModel extends Backbone.Model {

    defaults() {
        return {
            id: "1",
            "mark": "Ваз",
            "year": "2000",
            "mileage": 120000,
            "price": "620000",
            "clerk": "Petr",
            "phone": "Oleg"
        }
    }

}

const auto = new AutoModel();