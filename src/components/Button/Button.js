import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './Button.styles';

const OutlinedButton = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Calculate Cost
      </Button>
    </div>
  );
};

export default OutlinedButton;

OutlinedButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  // label: PropTypes.string.isRequired,
};
