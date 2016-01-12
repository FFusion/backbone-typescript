class MoreView extends Backbone.View<Backbone.Model> {
    template: (data: any) => string;

    constructor(options?:any) {
        this.setElement($(".car-content"));
        this.template = _.template($('#carMore').html());

        super(options);
    }

    initialize() {
        this.render();
    }

    events(): Backbone.EventsHash {
        return {
            "click #back": "back"
        }
    }


    render() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    back() {
        controller.navigate("/");
        controller.main();
    }

}
