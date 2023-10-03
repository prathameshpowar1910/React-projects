import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });

  // const [weight,setWeight] = useState(0)
  // const [height,setHeight] = useState(0)
  // const [bmi,setBmi] = useState(0)

  const handleClick = () => {
    const val = state.weight / Math.pow(state.height / 100, 2);
    setState((prevState) => ({
      ...prevState,
      bmi: val,
    }));
  };

  const handleChange = (e) => {
    if (e.target.name === "wt") {
      setState((prevState) => ({
        ...prevState,
        weight: e.target.value,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        height: e.target.value,
      }));
    }
  };

  return (
    <>
      <div>
        <h4>Weight is {state.weight} kgs</h4>
        <input
          type="range"
          value={state.weight}
          min="30"
          max="200"
          name="wt"
          id=""
          onChange={handleChange}
        />
        <h4>Height is {state.height} cm</h4>
        <input
          type="range"
          value={state.height}
          min="80"
          max="250"
          name="ht"
          id=""
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Calculate BMI" onClick={handleClick} />
      </div>
      <h1>BMI is {state.bmi}</h1>
    </>
  );
}

export default App;
