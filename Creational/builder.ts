// Constructor
class HotDog {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean
    ) {}
    // Healthy builder patterns realization through methods return the object itself
    addKetchup() {
        this.ketchup = true;
        return this;
    }
    addMustard() {
        this.ketchup = true;
        return this;
    }
    addKraut() {
        this.ketchup = true;
        return this;
    }
}
const hotdog = new HotDog('wheat', false, true, true);

// Building:
const another_one = new HotDog('also_wheat');
another_one.addKetchup().addMustard().addKraut();
