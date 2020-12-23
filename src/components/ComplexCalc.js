import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Input from './Form/Input';
import OutlinedButton from './Button/Button';
import Dropdown from './Form/Dropdown';

const ComplexCalc = ({
  handleOrigin, handleDestination, handleFee, handleClick, total,
}) => (
  <div>
    <h1>Calculate the Cost of your Route by Entering Coordinates</h1>
    <Container maxWidth="md">
      <Paper style={{ padding: '10px', marginBottom: '20px' }}>
        <Container maxWidth="sm">
          <Grid container spacing={3} maxWidth="xs">
            <Grid item xs={6}>
              <Input
                label="Origin Coordinates"
                handleChange={handleOrigin}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                label="Destination Coordinates"
                handleChange={handleDestination}
              />
            </Grid>
          </Grid>
        </Container>

        <h4> Pick your vehicle to select a pre-determined fee: </h4>
        <Dropdown handleFee={handleFee} />

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

export default ComplexCalc;
ComplexCalc.propTypes = {
  handleOrigin: PropTypes.func.isRequired,
  handleDestination: PropTypes.func.isRequired,
  handleFee: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,

};
