const pet = {
    name: 'Creole Baker',
    species: 'dog',
    breed: 'Pit bull',
    happiness: 50,
    playWithcreole: function () {
        console.log(`You played with ${this.name}! Happiness is now ${this.happiness + 10}!`);
        this.happiness += 10;
    },
    feedCreole: function () {
        console.log(`You fed ${this.name}! Happiness is now ${this.happiness + 20}!`);
        this.happiness += 20;
    },
    status: function () {
        console.log(`Creole status...name: ${this.name}, species: ${this.species}, happiness: ${this.happiness}`);
    },
    rename: function (newName) {
        this.name = newName;
        console.log(`The pet's new name is ${this.name}`);
    }
};

pet.status();
console.log(pet.playWithCreole());
pet.status();
console.log(pet.feedCreole());
pet.status();
pet.rename('shu');
pet.status();
