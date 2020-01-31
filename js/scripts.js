function Order() {
  pizza = [];
  this.currentId = 0;
}
Order.prototype.addPizza = function(pizza) {
var pizzaId = this.assignId();
this.pizza.push(pizza);
}
Order.prototype.assignId = function() {
  this.currentId++;
  return this.currentId[i];
}
function Pizza(size, sauce, crust, meats, veggies) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.meats = meats;
  this.veggies = veggies;
  this.price = 0;
}
Order.prototype.whatSize = function() {
  if (this.size === "small"){
    this.price = 6;
  } else if (this.size === "medium") {
    this.price = 9;
  } else if (this.size === "large") {
    this.price = 12;
  } else if (this.size === "x-large") {
    this.price = 15;
  } else if (this.size === "challenge") {
    this.price = 25;
  }
  return this.price
}
Order.prototype.whatSauce = function() {}
Order.prototype.whatCrust = function() {}
Order.prototype.whatMeats = function() {}
Order.prototype.whatVeggies = function() {}