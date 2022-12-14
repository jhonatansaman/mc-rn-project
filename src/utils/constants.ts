import { QueryClient } from "react-query";
import { getStatusBarHeight } from "./statusBarHeight";
export const HEADER_NAVIGATION_HEIGHT = 100 + getStatusBarHeight;

export const mockMenu = {
  id: "dc961cfe-dcf2-4ed7-b11b-762b199057fd",
  menus: [
    {
      name: "Bevareges",
      items: [
        {
          name: "Hot Chocolate",
          description:
            "Taste the delicious chocolatey flavor of a McCafé® Hot Chocolate. Hot chocolate made with steamed whole milk, rich chocolate syrup and topped with whipped topping and chocolate drizzle",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Hot-Chocolate-Medium:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Hot Tea",
          description:
            "McDonald's Hot Tea has a robust black tea flavor with hints of floral and orange notes",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-hot-tea:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Coca-Cola®",
          description:
            "Coca-Cola is a refreshing McDonald's soda option that complements all of your menu favorites",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Sprite®",
          description: "Sprite is a delicious lemon-lime fountain drink",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Dr Pepper®",
          description:
            "McDonald's serves Dr Pepper, the classic and refreshing fountain drink with a unique blend of 23 flavors",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Dr-Pepper-Small-1:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Diet Coke",
          description: "Try an icy cold Diet Coke®, with zero calories.",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Diet-Coke-Small-1:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Fanta® Orange",
          description:
            "McDonald’s Fanta Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor",
          price: 1.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fanta-orange-1:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Strawberry Banana Smoothie",
          description:
            "The McCafé® Strawberry Banana Smoothie recipe features the perfect combination of fruit purees and fruit juices, such as strawberry and banana, blended with creamy low fat yogurt and ice",
          price: 3,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-Banana-Smoothie-Medium:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Mango Pineapple Smoothie",
          description:
            "The McDonald’s Mango Pineapple Smoothie recipe features the sweet combination of fruit juices and purees such as mango and pineapple, blended with creamy low fat yogurt and ice",
          price: 3,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Mango-Pineapple-Smoothie-Small:product-header-desktop?wid=830&hei=458&dpr=off",
        },
      ],
    },
    {
      name: "Breakfast",
      items: [
        {
          name: "Bacon, Egg & Cheese Biscuit",
          description:
            "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese",
          price: 2.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Egg McMuffin®",
          description:
            "Our Egg McMuffin® breakfast sandwich is an excellent source of protein and oh so delicious. We place a freshly cracked Grade A egg on a toasted English Muffin topped with real butter and add lean Canadian bacon and melty American cheese",
          price: 2.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Sausage McMuffin®",
          description:
            "McDonald's Sausage McMuffin® recipe features a warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese",
          price: 2.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Sausage McMuffin with Egg®",
          description:
            "McDonald’s Sausage McMuffin® with Egg features a savory hot sausage, a slice of melty American cheese, and a delicious freshly cracked egg all on a freshly toasted English muffin",
          price: 3.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin-with-Egg:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Sausage Biscuit®",
          description:
            "McDonald’s Sausage Biscuit is the perfect sausage breakfast sandwich, made with sizzling hot sausage on a warm buttermilk biscuit that’s topped with real butter and baked to perfection",
          price: 2.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Sausage, Egg & Cheese McGriddles",
          description:
            "Sausage, Egg & Cheese McGriddles® feature soft, warm griddle cakes—with the sweet taste of maple—that hold a fluffy folded egg, savory sausage, and melty American cheese.",
          price: 3.89,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-desktop?wid=830&hei=456&dpr=off",
        },
      ],
    },
    {
      name: "Happy Meal",
      items: [
        {
          name: "Hamburger Happy Meal®",
          description:
            "Hamburger, World Famous Fries® (Kids), 1% Low Fat Milk Jug, Apple Slices",
          price: 2.49,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Hamburger:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "4 Piece Chicken McNuggets® Happy Meal",
          description:
            "Hamburger, World Famous Fries® (Kids), 1% Low Fat Milk Jug, Apple Slices",
          price: 2.79,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Chicken-McNuggets:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "6 Piece Chicken McNuggets® Happy Meal",
          description:
            "6 Piece Chicken McNuggets® (6 piece), World Famous Fries® (Kids), 1% Low Fat Milk Jug, Apple Slices",
          price: 3.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-McNuggets-Mighty-Kids-Meals:product-header-desktop?wid=830&hei=456&dpr=off",
        },
      ],
    },
    {
      name: "Burgers",
      items: [
        {
          name: "Big Mac®",
          description:
            "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other",
          price: 3.99,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Quarter Pounder®* with Cheese",
          description:
            "Each Quarter Pounder® with Cheese burger features a ¼ lb.* of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun",
          price: 3.79,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Double Quarter Pounder®* with Cheese",
          description:
            "Each Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order. McDonald’s beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun",
          price: 4.79,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Quarter Pounder®* with Cheese Deluxe",
          description:
            "McDonald's Quarter Pounder® with Cheese Deluxe is a fresh take on a Quarter Pounder® classic burger. Crisp shredded lettuce and three Roma tomato slices top a ¼ lb.* of 100% McDonald’s fresh beef that’s hot, deliciously juicy and cooked when you order. Seasoned with just a pinch of salt and pepper and sizzled on our flat iron grill. Layered with two slices of melty American cheese, creamy mayo, slivered onions and tangy pickles on a soft, fluffy sesame seed hamburger bun",
          price: 5.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-qpc-deluxe-burger:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "McDouble®",
          description:
            "The classic McDouble® burger stacks two 100% pure beef patties seasoned with just a pinch of salt and pepper. Wondering what the difference is between a McDouble® and a Double Cheeseburger? A slice of cheese! It’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American cheese",
          price: 2.99,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Hamburger",
          description:
            "The original burger starts with a 100% pure beef burger seasoned with just a pinch of salt and pepper. Then, the McDonald’s burger is topped with a tangy pickle, chopped onions, ketchup and mustard",
          price: 1.99,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Cheeseburger",
          description:
            "Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese",
          price: 2.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
      ],
    },
    {
      name: "Chicken & Sandwiches",
      items: [
        {
          name: "McChicken®",
          description:
            "It’s a classic for a reason. Savor the satisfying crunch of our juicy chicken patty, topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun",
          price: 2.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Chicken McNuggets®",
          description:
            "Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives",
          price: 1.99,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chicken-McNuggets-4pc-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {
          name: "Filet-O-Fish®",
          description:
            "Dive into our wild-caught Filet-O-Fish®! This McDonald’s fish sandwich has fish sourced from sustainably managed fisheries, on melty American cheese and topped with creamy McDonald’s tartar sauce, all served on a soft, steamed bun",
          price: 2.59,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
      ],
    },
    {
      name: "Desserts & Shakes",
      items: [
        {
          name: "Vanilla Cone",
          description:
            "Enjoy our creamy vanilla soft serve in a crispy cone! It's the perfect sweet treat in addition to any McDonald's meal or on its own",
          price: 1.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "McFlurry® with M&M'S® Candies",
          description:
            "The McDonald’s M&M ® McFlurry® is a sweet, creamy M&M’S® dessert of vanilla soft serve with M&M’S® chocolate candies swirled in",
          price: 2.59,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mm-mcflurry-snack:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Chocolate Shake",
          description:
            "Try the McDonald’s Chocolate Shake, the perfect sweet treat for any time of the day. Our chocolate shake is made with delicious soft serve, chocolate syrup and finished off with a creamy whipped topping",
          price: 3,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-McCafe-Shake-Medium-1:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Strawberry Shake",
          description:
            "McDonald's Strawberry Shake is made with creamy vanilla soft serve, blended with strawberry syrup and topped with whipped topping",
          price: 3,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-McCafe-Shake-Medium-1:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Vanilla Shake",
          description:
            "McDonald's vanilla shake is made with our creamy vanilla soft serve and topped with whipped topping for a cool, tasty treat",
          price: 3,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-McCafe-Shake-Medium-1:product-header-desktop?wid=830&hei=456&dpr=off",
        },
        {
          name: "Baked Apple Pie",
          description:
            "McDonald's Baked Apple Pie recipe features 100% American-grown apples, and a lattice crust baked to perfection and topped with sprinkled sugar",
          price: 2.29,
          url: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Baked-Hot-Apple-Pie-1:product-header-desktop?wid=829&hei=455&dpr=off",
        },
      ],
    },
  ],
};
