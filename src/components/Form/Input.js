import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import useStyles from './Input.styles';

const Input = ({ label, handleChange }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="filled-required"
          label={label}
          // defaultValue={defaultValue}
          variant="filled"
          onChange={handleChange}
        />
      </div>

    </form>
  );
};

export default Input;

Input.propTypes = {
  // defaultValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Input.defaultProps = {
//   jobList: [],
// };
