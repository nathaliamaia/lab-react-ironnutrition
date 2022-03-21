import { useState, useEffect } from 'react'

import 'bulma/css/bulma.css';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import Search from './Search';
import TodayFoods from './TodayFoods';

function App() {

  const [foods, setFoods] = useState([...foodsJson]);
  const [searchTerm, setSearchTerm] = useState('');
  const [todayFoods, setTodayFoods] = useState([])

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
    const clone = [...todayFoods]

    clone.push(foodObj)

    setTodayFoods(clone)
  }
  return (
    <div className='container'>
      <h1 className='title'></h1>
      {/*fzr iteration 3 aqui*/}
      <Search
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />


      <div className='columns'>
        <div className='column'>
          {foods.map((currentFoodObj) => (<FoodBox key={currentFoodObj.name} food={currentFoodObj} onFoodAdd={onFoodAdd} />
          ))}
        </div>
        <TodayFoods todayFoods={todayFoods} />
      </div>
    </div>
  );
}

export default App;
