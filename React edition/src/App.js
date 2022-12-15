import logo from './logo.svg';
import './App.css';
import { data, getIngredients, getCoffeeById } from './data'
import {useEffect, useRef, useState} from "react";
function App() {
  const ingredients = getIngredients();
  const [selectedIngredients, setIngredients] = useState([]);
  const [selectedCoffee, setCoffee] = useState(null)
  const handleIngredientChange = ({ checked }, ing) => {
    if (checked) {
      setIngredients((prev) => [...prev, ing])
    } else {
      setIngredients((prev) => prev.filter((item) => item !== ing))
    }
  }
  useEffect(() => {
      let size=selectedIngredients.length
      let flag=false
      data.forEach(element => {
          if(element.ingredients.length === size) {
              if(element.ingredients.every(i => selectedIngredients.includes(i))) {
                  setCoffee(element);
                  flag = true
              }
          }
      });
      if (!flag) {
          setCoffee(null)
      }
  }, [JSON.stringify(selectedIngredients)])
  return (
    <div className="App">
      <div className="header">
        <h1 className="headerTitle">What's the coffee?</h1>
        <p className="headerDescription">We mix the ingredients and get a drink</p>
      </div>
      <div className="ingredients">
        {ingredients.map((ing) => (
            <div className="ingredientsItem" key={ing}>
                <div className={"ingredientName"}>
                    <div className={"ingredientImage"}>
                        {ing.slice(0, 2)}
                    </div>
                    <label className={"ingredientsLabel"} htmlFor={ing}>{ing}</label>
                </div>
                <input className='checkbox' type="checkbox" onChange={(e) => handleIngredientChange(e.target, ing)} id={ing} name={ing} checked={selectedIngredients.includes(ing)}/>
            </div>
        ))}
      </div>
        {selectedCoffee ? (
            <div className={'coffeeCard'}>
                <img className={"coffeeImg"} src={selectedCoffee.image} alt=""/>
                <div className={'cardContent'}>
                    <div className="coffeeName">
                        {selectedCoffee.title}
                    </div>
                    <div className="coffeeDescription">
                        {selectedCoffee.description}
                    </div>
                </div>
            </div>
        ) : null}
    </div>
  );
}

export default App;
