const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneCarSymbol]() {
    const constructor = this.constructor[Symbol.species] || this.constructor;
    return new constructor(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}

export default Car;
