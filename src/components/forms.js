import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';
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
      <h1>Calculate the Cost of your Route</h1>
      <Container maxWidth="md">

        <Paper style={{ padding: '10px' }}>
          {/* <Hidden smDown>
            <Grid item md={4}>
              <h3> hello</h3>
            </Grid>
          </Hidden> */}

          <h4> Enter the Total Distance </h4>
          <Input label="km" handleChange={handleDistanceChange} />

          <h4> Pick your vehicle to select a pre-determined fee: </h4>
          <FormControl className={classes.formControl}>
            <Select
                // labelId="demo-simple-select-filled-label"
                // id="demo-simple-select-filled"
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

          <h3> or </h3>
          <h4> Enter a fee in €/km: </h4>
          <Input label="€/km" handleChange={handleFee} />
          <OutlinedButton handleClick={handleClick} />
          <h2>
            Total cost of route: €
            {total}
          </h2>
        </Paper>
      </Container>
    </div>
  );
};

export default Forms;
