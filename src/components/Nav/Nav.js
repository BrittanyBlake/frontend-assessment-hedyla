import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/hedyla.png';
import Logo2 from '../../assets/logo.png';
import useStyles from './Nav.styles';

const ButtonAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, handleShow] = useState(false);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    window.addEventListener('scroll', () => {
      window.scrollY > 95 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: show === true ? '#FFFFFF' : '#13151D',
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                textAlign: 'left',
                paddingLeft: '45px',
              }}
            >
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: '45px',
                    display: show === false ? 'block' : 'none',
                  }}
                />
                <img
                  src={Logo2}
                  alt="logo"
                  style={{
                    height: '45px',
                    display: show === true ? 'block' : 'none',
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                style={{ color: show === false ? 'white' : '#276690' }}
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
                  <Link to="/manual">Calculate distance Manually</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/"> Calculate distance with coordinates</Link>
                </MenuItem>
              </Menu>
              <Button
                style={{ color: show === false ? 'white' : '#276690' }}
                href="https://github.com/BrittanyBlake"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
              <Button
                style={{ color: show === false ? 'white' : '#276690' }}
                href="https://brittany-blake.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </Button>
              <Button
                style={{ color: show === false ? 'white' : '#276690' }}
                href="https://www.linkedin.com/in/brittany-a-blake/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
