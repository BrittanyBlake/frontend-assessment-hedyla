import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Input from './Form/Input';
import OutlinedButton from './Button/Button';
import Dropdown from './Form/Dropdown';

const SimpleCalc = ({
  handleDistanceChange,
  handleFee,
  handleClick,
  total,
}) => (
  <div>
    <h1>Calculate the Cost of your Route</h1>
    <Container maxWidth="md">
      <Paper style={{ padding: '10px' }}>
        <h4> Enter the Total Distance </h4>
        <Input label="km" handleChange={handleDistanceChange} />

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

export default SimpleCalc;

SimpleCalc.propTypes = {
  handleDistanceChange: PropTypes.func.isRequired,
  handleFee: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
