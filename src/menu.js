function Menu(dishes){
  this.foods = dishes == null ? {fries:2, drink:1}:dishes
}

Menu.prototype.get_food_list = function(){
  // console.log(this.foods)
  return this.foods
}

Menu.prototype.print_menu = function(){
  // var food = this.foods.map(format())
  // function format(title, price){
  //   return "%s £%.2f" % [title.to_s, price]
  // }
  // food
  // foods.map do |title, price|
  //   "%s £%.2f" % [title.to_s, price]
  // end.join(", ")
}

Menu.prototype.has_food = function(food){
  return typeof this.foods[food] !== "undefined";
}

Menu.prototype.price = function(food){
  return this.foods[food]
}
