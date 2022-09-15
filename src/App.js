import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [cities, setCities] = useState([]);

  const addCities = () => {
    //Complete function
    let inputElement = document.querySelector(".addInput");
    let city = inputElement.value.trim();

    setCities((values) => [...values, city]);
  };

  const removeCity = (key) => {
    let values = [...cities];
    values.splice(key, 1);
    setCities(values);
  };

  return (
    <div className="App">
      <div className="d-flex m-5">
        <input
          type="textbox"
          className="mx-3 addInput"
          placeholder="Add City"
        />
        <button onClick={() => addCities()} className="btn btn-info">
          Add
        </button>
      </div>
      <div>
        <ul>
          {cities.map((city, index) => {
            return (
              <div
                className="d-flex justify-content-start align-items-center"
                key={index}
              >
                <li className="m-2">{city}</li>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    removeCity(index);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
