 let coffee = new Set();

const json = [
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
        "image": "./img/Affogato.png",
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

let set = new Set();
json.forEach(element=>{
    element.ingredients.forEach(ingredient=>{
        set.add(ingredient);
    })
});

document.addEventListener('DOMContentLoaded', function() {
    set.forEach(ingredient=>{

        let ingredientsItem = document.createElement('div');
        ingredientsItem.className = "ingredientsItem";

        let ingredientName = document.createElement('div');
        ingredientName.className = "ingredientName";

        let ingredientImage = document.createElement('div');
        ingredientImage.className = "ingredientImage";
        ingredientImage.textContent = ingredient.slice(0, 2);

        ingredientName.appendChild(ingredientImage);

        let ingredientsLabel = document.createElement('label');
        ingredientsLabel.className = "ingredientsLabel";
        ingredientsLabel.htmlFor = ingredient;
        ingredientsLabel.textContent = ingredient;

        ingredientName.appendChild(ingredientsLabel);

        let checkbox = document.createElement('input');
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkbox.id = ingredient;
        checkbox.name = ingredient;

        checkbox.onclick = function(){
            if(checkbox.checked) {
                add(ingredient);
            }
            else {
                remove(ingredient);
            }
        }

        ingredientsItem.appendChild(ingredientName);
        ingredientsItem.appendChild(checkbox);

        let ingredients = document.getElementById("ingredients");
        ingredients.appendChild(ingredientsItem);

        


    });
}, false);

function add(text) {
    coffee.add(text);
    console.log(coffee);
    prepareCoffee();
}
function remove(text)
{
    coffee.delete(text);
    console.log(coffee);
    prepareCoffee();
}

function prepareCoffee() {
    let size = coffee.size;
    let сoffeeItem = null;
    let flag = false;
    let array = Array.from(coffee);
    json.forEach(element => {
        if(element.ingredients.length === size) {
            if(element.ingredients.every(function (i){ return array.includes(i); })){
                сoffeeItem = element;
                console.log(сoffeeItem);
                flag = true;
                return;
            }
        }
    });
    if(flag) {
        const getCoffeeCard = document.getElementById("coffeeCard");
        if(getCoffeeCard != null) getCoffeeCard.remove();

        let coffeeCard = document.createElement("div");
        coffeeCard.className = "coffeeCard";
        coffeeCard.id = "coffeeCard";
        let coffeeImg = document.createElement("img");
        coffeeImg.className = "coffeeImg";
        coffeeImg.src = сoffeeItem.image

        let cardContent = document.createElement("div");
        cardContent.className = "cardContent";

        let coffeeName = document.createElement("div");
        coffeeName.className = "coffeeName";
        coffeeName.textContent = сoffeeItem.title;
        let coffeeDescription = document.createElement("div");
        coffeeDescription.className = "coffeeDescription";
        coffeeDescription.textContent = сoffeeItem.description;

        cardContent.appendChild(coffeeName);
        cardContent.appendChild(coffeeDescription);

        coffeeCard.appendChild(coffeeImg);
        coffeeCard.appendChild(cardContent);
        let card = document.getElementById("card");
        card.appendChild(coffeeCard);
    }
    else{
        const getCoffeeCard = document.getElementById('coffeeCard');
        getCoffeeCard.remove();
    }
    
}
