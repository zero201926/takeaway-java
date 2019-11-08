describe("Menu", function(){
  var menu;
  var drink;
  var fries;
  var dishes;
  beforeEach(function(){
    // drink = jasmine.createSpyObj('drink', [1]);
    // fries = jasmine.createSpyObj('fries', [2]);
    // dishes = jasmine.createSpyObj('dishes', [drink, fries])
    menu = new Menu();
  });
  describe("#get_food_list", function(){
    // console.log(dishes)
    it("lists the dishes with the prices", function(){
      expect(menu.get_food_list()).toEqual(menu.foods)
    })
  })
  describe("#print_menu", function(){
    xit("prints a list of dishes with the price", function(){
      const p_menu = "fries £2.00, drink £1.00"
      expect(menu.print_menu()).toEqual(p_menu)
    })
  })
  describe("#has_food", function(){
    it("tells if a dish is on the menu", function(){
      expect(menu.has_food("fries")).toBeTruthy()
    })
    it("tells if a dish is not on the menu", function(){
      expect(menu.has_food("beef")).toBeFalsy()
    })
  })
  describe("#price", function(){
    it("calculates the price of food", function(){
      expect(menu.price("fries")).toEqual(menu.foods["fries"])
    })
  })
})
