import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, handelProduct } from '../../store/actions/actions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Category(props) {
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

const actionCreater = { handelCategory, handelProduct };

export default connect(mapStateToProps, actionCreater)(Category);
