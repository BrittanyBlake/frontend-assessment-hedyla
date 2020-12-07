import React, { useState } from 'react';

const Forms = () => {
  const [distance, setDistance] = useState(1);
  const [cost, setCost] = useState();
  const [total, setTotal] = useState(0);
  // const [fee, setFee] = useState(0);

  const handleDistanceChange = e => {
    setDistance(e.target.value);
    console.log('distance:', distance);
  };

  const handleFee = e => {
    const vehicle = e.target.value;
    if (vehicle === 'van') {
      setCost(0.25);
    } else if (vehicle === 'truck') {
      setCost(0.50);
    } else if (vehicle === 'car') {
      setCost(0.10);
    } else {
      setCost(e.target.value);
    }
    console.log(vehicle, cost);
  };

  // const handleCostChange = e => {
  //   setCost(e.target.value);
  //   console.log('cost:', cost);
  // };

  const handleClick = () => {
    setTotal(distance * cost);
    console.log(distance, 'distance');
    console.log(cost, 'cost');
  };

  return (
    <div>
      <h1>FORM</h1>
      <form>
        <label htmlFor="distance">
          Distance:
          <input name="distance" type="text" onChange={handleDistanceChange} />
        </label>
        <br />
        <label htmlFor="fee">
          Pick your vehicle to determine a fee:
          <select onChange={handleFee}>
            <option value="">-</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="car">Car</option>
          </select>
        </label>
        <br />
        <label htmlFor="cost">
          €/km:
          <input name="€/km" type="text" onChange={handleFee} />
        </label>
      </form>
      <button type="button" onClick={handleClick}>
        {' '}
        Calculate
      </button>
      <h2>
        Total cost of route: €
        {total}
      </h2>
    </div>
  );
};

export default Forms;
