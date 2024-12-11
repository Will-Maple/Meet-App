import { useState, useEffect } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState("32")

  const handleInputChanged = (event) => {

    const value = event.target.value;

    setNumber(value);


    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Please enter a number greater than 0!"
    } else {
      errorText = ""
      setCurrentNOE(value);
    }

    setErrorAlert(errorText);
  };

  return (
    <div id='number-of-events'>
      <input
        type="text"
        className="number"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;