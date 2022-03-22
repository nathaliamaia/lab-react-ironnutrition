import {useState} from 'react';

function NewFoodForm(props) {

    const[formData, setFormData] = useState({
        name:"", 
        image:"",
        calories:0
    });

    function handleForm(event){
        const clone = {...formData, [event.target.name]: event.target.value}

        setFormData(clone);
    }


  return (
    <div>
      <strong>
        <p style={{ textAlign: 'center' }}>Add Food Entry</p>
      </strong>

      <div className="box">
        <label className="label">Name</label>
        <div>
          <div>
            <input
              className="input is-normal"
              type="text"
              name="name"
              onChange={(event) => handleForm(event)}
            />
          </div>
        </div>

        <label className="label mt-2">image</label>
        <div>
          <div>
            <input
              className="input is-link"
              type="text"
              placeholder="http://example.com/food-image.jpg"
              name="image"
              onChange={(event) => handleForm(event)}
            />
          </div>
        </div>

        <label className="label mt-2">calories</label>
        <div>
          <div>
            <input
              className="input is-normal"
              type="text"
              name="calories"
              onChange={(event) => handleForm(event)}
            />
          </div>
        </div>

        <div>
          <button 
          className="button is-success mt-5 "
          onClick={() => props.addNewFood(formData)}
          >
          Add </button>
        </div>
      </div>
    </div>
  );
}
export default NewFoodForm;
