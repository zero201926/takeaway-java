function Order(menu){
  this.cost = 0
  this.dishes = {}
  this.menu = menu || new Menu
}

Order.prototype.make_order = function(choice, quantity){
  console.log(choice)
  console.log(this.menu.has_food(choice))
  if(this.menu.has_food(choice) == false) {
    throw new Error('food item is not on menu');
  }
  console.log(this.menu.has_food())
  console.log(choice)
  console.log(this.menu.has_food(choice))
  this.dishes[choice] = quantity
}

Order.prototype.total = function(){
  this.cost = totals
  return this.cost
}

function totals(){
  // map{choice, quantity => this.menu.price(choice) * quantity}
  (this.dishes).inject(function(choice, quantity) {
    return this.menu.price(choice) * quantity;
  })
}
