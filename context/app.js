class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hello my name is ${this.name}, i am ${this.type}`);
    }
}

class Soldier extends Player { 
    constructor(name, type) {
        super(name, type);
        console.log('soldier', this);
    }
}

const soldier = new Soldier('Babarian', 'Swords');