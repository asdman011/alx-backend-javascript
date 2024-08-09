import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clonedCar = super.cloneCar();
    Object.setPrototypeOf(clonedCar, Car.prototype); // Ensure prototype is set to Car
    return clonedCar;
  }
}

export default EVCar;
