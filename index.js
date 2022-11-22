 let coffee = new Set();

        const json = [
    {
        "title": "Black",
        "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
        "ingredients": [
            "Coffee",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        "id": 1,
    },
    {
        "title": "Latte",
        "description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
        "ingredients": [
            "Espresso",
            "Steamed Milk",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
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
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg",
        "id": 3,
    },
    {
        "title": "Americano",
        "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
        "ingredients": [
            "Espresso",
            "Hot Water",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg",
        "id": 4,
    },
    {
        "title": "Espresso",
        "description": "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
        "ingredients": [
            "1oz Espresso",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
        "id": 5,
    },
    {
        "title": "Doppio",
        "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
        "ingredients": [
            "2oz Espresso",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg",
        "id": 6,
    },
    {
        "title": "Cortado",
        "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
        "ingredients": [
            "1oz Espresso",
            "1oz Steamed Milk",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
        "id": 7,
    },
    {
        "title": "Red Eye",
        "description": "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
        "ingredients": [
            "Coffee",
            "Espresso",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg",
        "id": 8,
    },
    {
        "title": "Galão",
        "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
        "ingredients": [
            "Espresso",
            "Foamed milk",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
        "id": 9,
    },
    {
        "title": "Lungo",
        "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
        "ingredients": [
            "Long pulled espresso",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
        "id": 10,
    },
    {
        "title": "Macchiato",
        "description": "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
        "ingredients": [
            "Espresso",
            "Foam",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
        "id": 11,
    },
    {
        "title": "Mocha",
        "description": "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
        "ingredients": [
            "Espresso",
            "Steamed Milk",
            "Chocolate",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
        "id": 12,
    },
    {
        "title": "Ristretto",
        "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
        "ingredients": [
            "Short pulled espresso",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
        "id": 13,
    },
    {
        "title": "Flat White",
        "description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
        "ingredients": [
            "Espresso",
            "Steamed Milk",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
        "id": 14,
    },
    {
        "title": "Affogato",
        "description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
        "ingredients": [
            "Espresso",
            "Ice cream",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
        "id": 15,
    },
    {
        "title": "Café au Lait",
        "description": "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
        "ingredients": [
            "Coffee",
            "Steamed Milk",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
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
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Irish_coffee_glass.jpg",
        "id": 17,
    },
    {
        "title": "Guayoyo",
        "description": "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
        "ingredients": [
            "Coffee",
            "Traditional",
            "Hot Water",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        "id": 18,
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
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg",
        "id": 19,
    },
    {
        "title": "Aguapanela Coffee",
        "description": "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
        "ingredients": [
            "Coffee",
            "Sweet",
            "Panela",
            "Traditional",
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg/640px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg",
        "id": 20,
    },
];

class Coffee
{
    constructor(jsonObject)
    {
    this.title = jsonObject.title;
    this.url = jsonObject.image;
    this.description=jsonObject.description;
    }
    getTitle(){return this.title;}
    getImage(){return this.url;}
    getDescription(){return this.description;}
}

let map = new Map();
json.forEach(element=>{
    map.set(element.id, new Coffee(element));
});

let set = new Set();
json.forEach(element=>{
    element.ingredients.forEach(ingredient=>{
        set.add(ingredient);
    })
});

document.addEventListener('DOMContentLoaded', function() {
    let i = 0;
    set.forEach(ingredient=>{
        let chBox = document.createElement('input');
        chBox.type = 'checkbox';
        chBox.className='checkbox';
        chBox.id=ingredient;
        let label = document.createElement('label');
        label.textContent=ingredient;
        chBox.onclick = function(){
            if(chBox.checked===true)
            {
                add(ingredient);
            }
            else{
                remove(ingredient);
            }
        }
        let container = document.getElementById(`row${i%4}`);
        let div = document.createElement('div');
        div.appendChild(chBox);
        div.appendChild(label);
        container.appendChild(div);
        i++;
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
    let idCoffee = null;
    let array = Array.from(coffee);
    json.forEach(element => {
        if(element.ingredients.length === size) {
            if(element.ingredients.every(function (i){ return array.includes(i); })){
                idCoffee=element.id;
                return;
            }
        }
    });
    let img = document.getElementById("imageCoffee");
    let desc = document.getElementById("descriptionCoffee");
    let title = document.getElementById("titleCoffee");
    if(idCoffee===null)
    {
        img.src = "https://podarki-moscow.ru/wa-data/public/shop/products/78/41/14178/images/36811/36811.750x0.jpg";
        desc.textContent="Данный кофе не получился, но не унывайте. Попробуйте выбрать другие ингридиенты";
        title.textContent="Эх..."
    }
    else
    {
        img.src = map.get(idCoffee).getImage();
        desc.textContent=map.get(idCoffee).getDescription();
        title.textContent=map.get(idCoffee).getTitle();
    }
}
