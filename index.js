// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId=0;

let mealId=0;

class Meal{
  constructor(name){
    this.name=name;
    this.id=++mealId;
    store.meals.push(this);
  }
}

class Neighborhood{
  constructor(name){
    this.name=name;
    this.id=++neighborhoodId;
    store.neighborhoods.push(this);
  }
}

let customerId=0;
class Customer{
  constructor(name,neighborhoodId){
    this.name=name;
    this.id=++customerId;
    store.customers.push(this);
    if(neighborhoodId){
      this.neighborhoodId=neighborhoodId;
    }
  }
}

let deliveryId=0;
class Delivery{
  constructor(name){
    this.name=name;
    this.id=++deliveryId;
    store.deliveries.push(this);
  }
}
