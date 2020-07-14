import React from 'react';
import { connect } from 'react-redux';
import {
  handelCategory,
  handelProduct,
  getRemoteProduct,
  getRemoteData,
} from '../../store/actions/actions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

function Category(props) {
  useEffect(() => {
    props.getRemoteData();
    props.getRemoteProduct();
  }, []);
  return (
    <>
      <Typography gutterBottom variant="h5" component="h1">
        Browse our Category
      </Typography>
      <ul>
        {props.categories.map((category) => (
          <Button
            onClick={() => {
              props.handelCategory(category.name);
              props.handelProduct(category.name);
            }}
            key={category.name}
            size="small"
            color="primary"
          >
            {category.displayName}
          </Button>
        ))}
      </ul>
    </>
  );
}
const mapStateToProps = (state) => {
  return { categories: state.categories.categories };
};

const actionCreater = (dispatch) => ({
  handelCategory: () => dispatch(handelCategory()),
  handelProduct: (category) => dispatch(handelProduct(category)),
  getRemoteProduct: () => dispatch(getRemoteProduct()),
  getRemoteData: () => dispatch(getRemoteData()),
});

export default connect(mapStateToProps, actionCreater)(Category);
