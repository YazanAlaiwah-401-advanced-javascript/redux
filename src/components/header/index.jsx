import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header(props) {
  const classes = useStyles();
  return (
    <AppBar color="black" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="black"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          OUR STORE
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <Typography color="inherit">CART({props.cart.carts.length})</Typography>
      </Toolbar>
    </AppBar>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Header);
