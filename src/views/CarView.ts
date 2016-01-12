class AutoView extends Backbone.View<Backbone.Model> {
    template: (data: any) => string;

    constructor(options?: any) {

        this.tagName = 'tr';
        super(options);

        this.template = _.template($('#car').html());
        this.initialize();
    }

    initialize() {
        //первый вариант прослушки события
        this.model.on('change', this.render, this);
        //второй вариант прослушки события
        this.listenTo(this.model, 'destroy', this.remove);

//        this.model.view = this;
    }
    events(): Backbone.EventsHash {
        return {
            "click #delete": "deleteCar",
            "click #look": "lookMore"
        }
    }

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    deleteCar() {
        this.model.destroy();
        var message = new snackHelpers();
        message.shack({content: "Успешно удалено", style:"toast text-center",timeout:2000});
    }

    lookMore() {
        controller.car();
        var viewMore = new MoreView({model:this.model});
    }

    remove() {
        this.$el.remove();
        return this;
    }

}
