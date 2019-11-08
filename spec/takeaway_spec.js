describe("Takeaway", function(){
  beforeEach(function(){
    takeaway = new Takeaway();
  });
  describe("#view_menu", function(){
    it("displays the menu", function(){
      expect(takeaway.view_menu()).toEqual({ fries: 2, drink:1 })
    })
  })
  describe("#place_order", function(){
    it("places the order", function(){
      takeaway.make_order(foods)
      takeaway.order.total()
      expect(takeaway.order.total()).toHaveBeenCalled();
      expect(takeaway.make_order(foods)).toHaveBeenCalledWith(foods);
    })
  })
  describe("#make_order", function(){
    it("make the order", function(){
      order.make_order(dish, quantity)
      expect(order.make_order(dish, quantity)).toHaveBeenCalledWith(dish, quantity);
    })
  })
  // sms o
})
