import React from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    maxWidth: 300,
    // maxHeight: 200,
    // backgroundColor: theme.palette.background.paper,
    // textAlign: 'end',
  },
}));
function SimpleCart(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {console.log(props.cart, 'hello abd')}
        {props.cart.carts.map((item) => {
          return (
            <ListItem key={item}>
              <ListItemText primary={item} />
              <ListItemIcon>
                <DeleteIcon
                  color="secondary"
                  onClick={() => props.removeCart(item)}
                />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const actionCreater = { removeCart };
export default connect(mapStateToProps, actionCreater)(SimpleCart);
