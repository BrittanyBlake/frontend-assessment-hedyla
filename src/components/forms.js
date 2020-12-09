import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from './Form/Input';
import OutlinedButton from './Button/Button';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Forms = () => {
  const classes = useStyles();
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
      <form>
        <h3> Enter the Total Distance </h3>
        <Input label="Distance" handleChange={handleDistanceChange} />

        <h3> Pick your vehicle to select a pre-determined fee: </h3>
        <FormControl variant="filled" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={handleFee}
            style={{ width: '250px' }}
          >
            <MenuItem value="">
              <em>Pick One</em>
            </MenuItem>
            <MenuItem value="truck">Truck</MenuItem>
            <MenuItem value="van">Van</MenuItem>
            <MenuItem value="car">Car</MenuItem>
          </Select>
        </FormControl>

        <h4> or </h4>
        <h3> Enter a fee in €/km: </h3>
        <Input label="€/km" handleChange={handleFee} />
      </form>
      <OutlinedButton handleClick={handleClick} />
      {/* <button type="button" onClick={handleClick}>
        {' '}
        Calculate
  </button> */}
      <h2>
        Total cost of route: €
        {total}
      </h2>
    </div>
  );
};

export default Forms;
