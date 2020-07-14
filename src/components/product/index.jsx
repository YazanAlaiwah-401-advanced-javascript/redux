import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { putRemoteProduct } from '../../store/actions/actions';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
    maxHeight: 300,
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
            height="150"
            width="10%"
            image={product.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              stock : {product.inStock}
            </Typography>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                props.addToCart(product.name, product._id, product.inStock)
              }
            >
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
  return { productsList: state.products.productsList };
};
const actionCreater = (dispatch) => ({
  addToCart: (id, stock, name) => dispatch(putRemoteProduct(id, stock, name)),
});

export default connect(mapStateToProps, actionCreater)(Product);
