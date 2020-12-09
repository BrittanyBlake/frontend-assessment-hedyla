import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from './Button.styles'


const Button = ({handleClick}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Primary
      </Button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};