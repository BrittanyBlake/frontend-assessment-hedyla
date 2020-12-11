import React, { useState } from 'react';
import SimpleCalc from '../components/SimpleCalc';

const SimpleCalcHome = () => {
  const [distance, setDistance] = useState(1);
  const [cost, setCost] = useState();
  const [total, setTotal] = useState(0);

  const handleDistanceChange = e => {
    setDistance(e.target.value);
    console.log('distance:', distance);
  };

  const handleFee = e => {
    const vehicle = e.target.value;
    if (vehicle === 'van') {
      setCost(0.25);
    } else if (vehicle === 'truck') {
      setCost(0.5);
    } else if (vehicle === 'car') {
      setCost(0.1);
    } else {
      setCost(e.target.value);
    }
    console.log(vehicle, cost);
  };

  const handleClick = () => {
    setTotal(distance * cost);
    console.log(distance, 'distance');
    console.log(cost, 'cost');
  };

  return (
    <div>
      <SimpleCalc
        handleDistanceChange={handleDistanceChange}
        handleFee={handleFee}
        handleClick={handleClick}
        total={total}
      />
    </div>
  );
};

export default SimpleCalcHome;
