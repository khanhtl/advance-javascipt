function AnimalCreator(name, sex) {
    this.name = name;
    this.sex = sex;
}

const cat = new AnimalCreator('Tom', 'Male');
const mouse = new AnimalCreator('Jerry', 'Male');

AnimalCreator.prototype.run = function () {
    console.log(this.name + ' is running');
}

cat.run();
console.log(AnimalCreator.prototype);