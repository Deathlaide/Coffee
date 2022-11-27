export const data = [
  {
      "title": "Black",
      "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
      "ingredients": [
          "Coffee",
      ],
      "image": "./img/Black.png",
      "id": 1,
  },
  {
      "title": "Latte",
      "description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
      "ingredients": [
          "Espresso",
          "Steamed Milk",
      ],
      "image": "img/Latte.png",
      "id": 2,
  },
  {
      "title": "Cappuccino",
      "description": "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
      "ingredients": [
          "Espresso",
          "Steamed Milk",
          "Foam",
      ],
      "image": "img/Cappuccino.png",
      "id": 3,
  },
  {
      "title": "Americano",
      "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
      "ingredients": [
          "Espresso",
          "Hot Water",
      ],
      "image": "img.Americano.png",
      "id": 4,
  },
  {
      "title": "Espresso",
      "description": "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
      "ingredients": [
          "1oz Espresso",
      ],
      "image": "img/Espresso.png",
      "id": 5,
  },
  {
      "title": "Doppio",
      "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
      "ingredients": [
          "2oz Espresso",
      ],
      "image": "img/Doppio.png",
      "id": 6,
  },
  {
      "title": "Cortado",
      "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espressoвЂ™s acidity.",
      "ingredients": [
          "1oz Espresso",
          "1oz Steamed Milk",
      ],
      "image": "img/Cortado.png",
      "id": 7,
  },
  {
      "title": "Lungo",
      "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
      "ingredients": [
          "Long pulled espresso",
      ],
      "image": "img/Lungo.png",
      "id": 10,
  },
  {
      "title": "Macchiato",
      "description": "The macchiato is another espresso-based drink that has a small amount of foam on top. ItвЂ™s the happy medium between a cappuccino and a doppio.",
      "ingredients": [
          "Espresso",
          "Foam",
      ],
      "image": "img/Macchiato.png",
      "id": 11,
  },
  {
      "title": "Mocha",
      "description": "For all you chocolate lovers out there, youвЂ™ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
      "ingredients": [
          "Espresso",
          "Steamed Milk",
          "Chocolate",
      ],
      "image": "img/Mocha.png",
      "id": 12,
  },
  {
      "title": "Flat White",
      "description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. ItвЂ™s an espresso drink with steamed milk.",
      "ingredients": [
          "Espresso",
          "Steamed Milk",
      ],
      "image": "img/Flat White.png",
      "id": 14,
  },
  {
      "title": "Affogato",
      "description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
      "ingredients": [
          "Espresso",
          "Ice cream",
      ],
      "image": "img/Affogato.png",
      "id": 15,
  },
  {
      "title": "Café au Lait",
      "description": "Café au Lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and youвЂ™re all set!",
      "ingredients": [
          "Coffee",
          "Steamed Milk",
      ],
      "image": "img/Café au Lait.png",
      "id": 16,
  },
  {
      "title": "Irish",
      "description": "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
      "ingredients": [
          "Coffee",
          "Whiskey",
          "Sugar",
          "Cream",
      ],
      "image": "img/Irish.png",
      "id": 17,
  },
  {
      "title": "Cortadito",
      "description": "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
      "ingredients": [
          "Coffee",
          "Traditional",
          "Sugar",
          "Milk",
      ],
      "image": "img/Cortadito.png",
      "id": 19,
  },
];

export function getIngredients() {
  let set = new Set();
  data.forEach(element=>{
    element.ingredients.forEach(ingredient=>{
      set.add(ingredient);
    })
  });
  return [...set];
}

export function getCoffeeById(id) {
  return data.find(coffee => coffee.id === id)
}