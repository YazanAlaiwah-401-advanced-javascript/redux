import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
  },
  list: {
    display: 'flex',
  },
});
function Product(props) {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {props.productsList.map((product) => (
        <Card key={product.name} className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            width="10%"
            image={product.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Button size="small" color="primary">
              Add Cart
            </Button>
            <Button size="small" color="primary">
              view Deities
            </Button>
          </CardContent>
        </Card>
      ))}
    </ul>
  );
}
const mapStateToProps = (state) => {
  return { productsList: state.store.productsList };
};
export default connect(mapStateToProps)(Product);
