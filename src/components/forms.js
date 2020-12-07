import React, { useState } from 'react';

const Forms = () => {
  const [distance, setDistance] = useState(1);
  const [cost, setCost] = useState(1);
  const [total, setTotal] = useState(0);

  const handleDistanceChange = e => {
    setDistance(e.target.value);
    console.log('distance:', distance);
  };

  const handleCostChange = e => {
    setCost(e.target.value);
    console.log('cost:', cost);
  };

  const handleClick = () => {
    setTotal(distance * cost);
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
        <label htmlFor="cost">
          €/km:
          <input name="€/km" type="text" onChange={handleCostChange} />
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
