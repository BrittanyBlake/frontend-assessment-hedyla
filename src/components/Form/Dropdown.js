import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';

const Dropdown = ({ handleFee }) => (
  <div>
    <Select onChange={handleFee} style={{ width: '250px' }}>
      <MenuItem value="">
        <em>Pick One</em>
      </MenuItem>
      <MenuItem value="truck">
        {' '}
        <LocalShippingTwoToneIcon />
        {' '}
        Truck
      </MenuItem>
      <MenuItem value="van">
        {' '}
        <AirportShuttleTwoToneIcon />
        {' '}
        Van
      </MenuItem>
      <MenuItem value="car">
        {' '}
        <DriveEtaTwoToneIcon />
        {' '}
        Car
      </MenuItem>
    </Select>
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  handleFee: PropTypes.func.isRequired,
};
