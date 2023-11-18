function AnimalCreator(name, sex) {
    var animal = Object.create(commonFunctionality)
    animal.name = name;
    animal.sex = sex;
    return animal;
}

const commonFunctionality = {
    isHunan() {
        console.log(this.name);
        return false;
    }
}

const cat = new AnimalCreator('Tom', 'Male');
const mouse = new AnimalCreator('Jerry', 'Male');

console.log(mouse.__proto__);