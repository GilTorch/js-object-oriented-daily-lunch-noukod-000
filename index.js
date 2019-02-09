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
