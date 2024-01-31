import car from "./car";

export default class wishlist {
    constructor()
    {
        this.list = [];
        this.nextId = 0;
    }
    add(make, model, year)
      {
      const newCar = new car(++this.nextId, make, model, year);
      this.list.push(newCar);
      }
    remove(carId)
        {
         const cintLoc = this.list.findIndex(car => car.id == carId);
         if (cintLoc > -1) 
            {this.list.splice(cintLoc,1)};
        }
}