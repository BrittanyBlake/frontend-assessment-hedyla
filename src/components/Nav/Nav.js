import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MenuIcon from '@material-ui/icons/Menu';
// import Link from "@material-ui/core/Link";
import { Link } from 'react-router-dom';
// import Container from '@material-ui/core/Container';
// import { Typography } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/hedyla.png';
import useStyles from './Nav.styles';

const ButtonAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>

          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ height: '45px' }}
            />
          </Link>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Forms
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Calculate distance Manually</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/auto"> Calculate distance with coordinates</Link>
            </MenuItem>
          </Menu>
          <Button
            href="https://github.com/BrittanyBlake"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
          <Button
            href="https://brittany-blake.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </Button>
          <Button
            href="https://www.linkedin.com/in/brittany-a-blake/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
