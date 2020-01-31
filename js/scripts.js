// BACKEND LOGIC //
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
Order.prototype.findPizza = function(id) {
  for (var i=0; i< this.Pizza.length; i++) {
    if (this.Pizza[i]) {
      if (this.Pizza[i].id == id) {
        return this.Pizza[i];
      }
    }
  };
  return false;
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
    this.price += 6;
  } else if (this.size === "medium") {
    this.price += 9;
  } else if (this.size === "large") {
    this.price += 12;
  } else if (this.size === "x-large") {
    this.price += 15;
  } else if (this.size === "challenge") {
    this.price += 25;
  }
  return this.price
}
Order.prototype.whatSauce = function() {
  if (this.size === "red-tomato"){
    this.price += 0;
  } else if (this.size === "white-sauce") {
    this.price += 2;
  } else if (this.size === "margherita") {
    this.price -= 2;
  }
  return this.price
}
Order.prototype.whatCrust = function() {
  if (this.size === "thin-crust"){
    this.price -= 1;
  } else if (this.size === "hand-tossed") {
    this.price += 0;
  } else if (this.size === "brooklyn-style") {
    this.price += 0;
  } else if (this.size === "stuffed") {
    this.price += 3;
  return this.price
}
Order.prototype.whatMeats = function() {}
Order.prototype.whatVeggies = function() {}

// FRONTEND LOGIC //
var newOrder = new Order();

$(document).ready(function(){
  $("form#configurator").submit(function(event){
    event.preventDefault();

    var selectedSize = $("select#pizza-size").val();
    var selectedSauce = $("select#pizza-sauce").val();
    var selectedCrust = $("select#pizza-crust").val();
    var newPizza = new Pizza(selectedSize, selectedSauce, selectedCrust);
    newOrder.addPizza(newPizza);
    console.log(newOrder.Pizza);

    $("#meat-toppings").show();
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meats = $(this).val();
      $('#meats').append(meats + "<br>");
    });
    $("#veggie-toppings").show();
    $("input:checkbox[name=veggie-toppings]:checked").each(function(){
      var veggies = $(this).val();
      $('#veggies').append(veggies + "<br>");
    });
    $('#configurator').hide();
  });
});
