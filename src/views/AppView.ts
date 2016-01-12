class AppView extends Backbone.View<Backbone.Model> {

    mark:any;
    year:any;
    mileage:any;
    price:any;
    clerk:any;
    phone:any;


    constructor() {
        super();

        this.setElement($(".auto-list"));
        cars.fetch({reset:true});
    }

    initialize() {
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

    }

    events(): Backbone.EventsHash {
        return {
            "click #add": "createNewCar"
        }
    }

    render() {
        cars.each(this.addCar);
        return this;
    }

    addCar(auto:Backbone.Model) {
        var viewCar = new CarView({model:auto});
        $('.auto-list > table > tbody').append(viewCar.render().el);
    }

    createNewCar() {
        // добавляем модель в коллекцию
        cars.create({
            id  :      cars.nextNumber(),
            mark:       this.mark.val(),
            year:       this.year.val(),
            mileage:    this.mileage.val(),
            price:      this.price.val(),
            clerk:      this.clerk.val(),
            phone:     this.phone.val()
        });

        this.mark.val('');
        this.year.val('');
        this.mileage.val('');
        this.price.val('');
        this.clerk.val('');
        this.phone.val('');
    }


}

