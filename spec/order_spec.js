describe("Order", function(){
  var order;
  beforeEach(function(){
    order = new Order(new Menu);
    // menu = jasmine.createSpyObj('menu', ["price", "has_food"]);
    spyOn(order.menu, "price").and.callFake(function(food) {
      return typeof this.foods[food] !== "undefined";
    });
    spyOn(order.menu, "has_food").and.callFake(function(food) {
      console.log( menu.foods[food])
      return this.foods[food];
    });

  });
  describe("#make_order", function(){
    it("show throw error when food choice not on the menu", function(){
      expect(function(){ order.make_order("beef", 2) }).toThrowError("food item is not on menu")
    })
    it("adds order to order list", function(){
      order.make_order("fries", 2)
      expect(order.dishes).toEqual({ fries: 2 })
    })
  })
  describe("#total", function(){
    it("return cost for the meal", function(){
      order.make_order("fries", 2)
      order.make_order("drink", 1)
      var total = 5
      expect(order.total()).toEqual(total)
    })
  })
  // describe("#totals", function(){
  //   it("calculates cost for the meal", function(){
  //     order.make_order("fries", 2)
  //     order.make_order("drink", 1)
  //     var total = 5
  //     expect(order.total()).toEqual(total)
  //   })
  // })
})
