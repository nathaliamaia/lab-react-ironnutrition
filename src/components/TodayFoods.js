import {useState} from 'react';

function TodayFoods(props) {

    const [selectedFood, setSelectedFood] = useState([]);

    function selectItems(name) {
        const clone = [...selectedFood]
       //procurar o indice do elemento
        const index = clone.indexOf(name)
        //se  existir o el retorna maior do que -1 
        if(index > -1){
            clone.splice(index, 1) //remove o elemento pela posição;
        // se não existir o elemento ele adiciona
        } else {
            clone.push(name);
        }
        
        setSelectedFood(clone);
    }

    return (
      <div className="column content">
        <h2 className="subtitle ml-6">Today's foods</h2>
        <ul style={{ listStyle: 'none' }}>
          {props.todayFoods.map((currentFoodObj) => {
            const { name, quantity, calories } = currentFoodObj;
            return (
              <div className="box">
                <li>
                  <label className="checkbox">
                    <input checked={selectedFood.includes(name)} onClick={() => selectItems(name)} className="mr-2" type="checkbox" />
                  </label>
                  {quantity} {name} = {calories * quantity} cal
                </li>
              </div>
            );
          })}
        </ul>
        <strong className="ml-6">
        
          Total:
          {props.todayFoods.reduce((acc, currentFoodObj) => {
            const { quantity, calories } = currentFoodObj;

            return acc + quantity * calories;
          }, 0)}
          cal
        </strong>
        <div>
          <button onClick={() => props.deleteItems(selectedFood)} className="button is-danger mt-5 ml-6">Delete</button>
        </div>
      </div>
    );

}

export default TodayFoods;

