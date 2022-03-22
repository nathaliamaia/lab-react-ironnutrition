import { useState, useEffect } from 'react'

import 'bulma/css/bulma.css';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import Search from './Search';
import TodayFoods from './TodayFoods';
import NewFoodForm from './NewFoodForm';

function App() {

  const [foods, setFoods] = useState([...foodsJson]);
  const [searchTerm, setSearchTerm] = useState('');
  const [todayFoods, setTodayFoods] = useState([]);


  useEffect(() => {
    filterFoods(searchTerm);
  }, [searchTerm])

  function filterFoods(term) {
    const clone = [...foods]

    const filtered = clone.filter((currentFoodObj) => {
      return currentFoodObj.name.toLowerCase().includes(term.toLowerCase())
    })

    setFoods(filtered);

    if (!term) {
      setFoods([...foodsJson])
    }
  }

  function onFoodAdd(foodObj) {
    const clone = [...todayFoods];

    let modify = false;

    clone.map((todayFood) => {
      if (foodObj.name === todayFood.name) {
        modify = true;
        todayFood.quantity += foodObj.quantity;
      }
    })
    if (!modify) {
      clone.push(foodObj);
    }
    setTodayFoods(clone);

  }

  // another option

  // function onFoodAdd(foodObj) {
  //   const eveythingButFood = todaysFood.filter((element) => {
  //     return element.name !== food.name;
  //   });

  //   const calcNewTotal = todaysFood.filter((element) => {
  //     return element.name === food.name;
  //   });

  //   const quantityAux = calcNewTotal.reduce((acc, current) => {
  //     return { ...current, quantity: acc.quantity + current.quantity };
  //   }, food);

  //   setTodaysFodd([...eveythingButFood, quantityAux]);
  // }


  function deleteItems(items) {
    const clone = todayFoods.filter((food) => !items.includes(food.name));

    console.log(clone);

    setTodayFoods(clone)
  }


  //another option

  // function deleteItems(items) {
  //   const clone = [...todaysFood];
  //   clone.splice(items, 1);
  //   setTodaysFodd([...clone]);
  // }

  function addNewFood(formData) {
    const clone = [...foods]

    clone.push(formData)

    setFoods(clone);
  }


  return (
    <div className='container'>
      <h1 className='title'></h1>

      <NewFoodForm addNewFood={addNewFood} />

      <Search
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />


      <div className='columns'>
        <div className='column'>
          {foods.map((currentFoodObj) => (<FoodBox key={currentFoodObj.name} food={currentFoodObj} onFoodAdd={onFoodAdd} />
          ))}
        </div>
        <TodayFoods todayFoods={todayFoods} deleteItems={deleteItems} />
      </div>
    </div>
  );
}

export default App;
