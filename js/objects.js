function createCar(property, value) {
    return {
        [property]: value,
        ['get' + property.toUpperCase()]() {
            return this[property];
        }
    }
}

console.log(createCar('vin', 1));
