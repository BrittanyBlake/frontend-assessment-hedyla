import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { GetDistance } from '../redux/actions/index';
import Input from '../components/Form/Input';
import OutlinedButton from '../components/Button/Button';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const distanceList = useSelector(state => state.distance);
  const [originCord, setOriginCord] = useState('13.428555,52.523219');
  const [destCord, setDestCord] = useState('13.397634,52.529407');
  // const [distance] = useState(1);
  const [cost, setCost] = useState();
  const [total, setTotal] = useState(0);

  const FetchData = (origin, dest) => {
    dispatch(GetDistance(origin, dest));
  };

  const handleOrigin = e => {
    e.preventDefault();
    console.log(e.target.value);
    setOriginCord(e.target.value);
    console.log('origin', originCord);
  };

  const handleDestination = e => {
    e.preventDefault();
    console.log(e.target.value);
    setDestCord(e.target.value);
    console.log('destination', destCord);
  };
  // Barcelona '41.3851,2.1734'
  // Granada 37.1773,3.5986

  React.useEffect(() => {
    FetchData(originCord, destCord);
  }, [originCord, destCord]);

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
    setTotal(distanceList.routes[0].distance * cost);
    console.log(cost, 'cost');
  };

  return (
    <div>
      <h2> Calculate costs by entering the coordinates</h2>
      <Container maxWidth="sm">
        <Grid container spacing={3} maxWidth="xs">
          <Grid item xs={6}>
            <Input label="Origin Coordinates" handleChange={handleOrigin} />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Destination Coordinates"
              handleChange={handleDestination}
            />
          </Grid>
        </Grid>
      </Container>

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

      <OutlinedButton handleClick={handleClick} />
      <h2>
        Total cost of route: €
        {total}
      </h2>
    </div>
  );
};

export default HomePage;
