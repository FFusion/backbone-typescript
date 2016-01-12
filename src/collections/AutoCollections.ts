declare var Store: any;

class AutoCollection<AutoModel> extends Backbone.Collection<Backbone.Model> {
    localStorage = new Store("cars");

    nextNumber() {
        if (!this.length) return 1;
        return this.last().get('id') + 1;
    }

}

const cars = new AutoCollection();



