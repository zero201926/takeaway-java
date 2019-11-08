function Takeaway(){
  // sms option
  this.menu = new Menu
  this.order = new Order
}

Takeaway.prototype.view_menu = function(){
  return this.menu.get_food_list()
}

Takeaway.prototype.place_order = function(foods){
  make_order(foods)
  // send sms
  this.order.total
}

function make_order(foods){
  foods.each(dish, quantity => this.order.make_order(dish, quantity))
}
