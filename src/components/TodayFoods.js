function TodayFoods(props) {

    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
            {props.todayFoods.map((currentFoodObj) => {
                const {name, quantity, calories} = currentFoodObj;
                return (
                    <li>
                        {quantity} {name} = {calories * quantity} cal
                    </li>
                );
            })}
        </ul>
        <strong> Total: {props.todayFoods.reduce((acc, currentFoodObj) => {const {quantity, calories} = currentFoodObj
        
        return acc + (quantity * calories)},0)} cal</strong>
      </div>
    );

}

export default TodayFoods;