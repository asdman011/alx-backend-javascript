import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    this._floors = 0;
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
