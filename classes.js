class Threat {
    constructor(name) {
        this.name = name;
    }

    getDescription() {
        return `You have unleashed a ${this.name}`;
    }
}


export class Curse extends Threat {
    constructor(name) {
        super(name);
        this.name = "terrifying curse";
    }
}