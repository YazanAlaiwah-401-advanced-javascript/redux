import React from 'react';
import { connect } from 'react-redux';

function ActiveCategory(props) {
  return <h1>{props.activeCategory}</h1>;
}
const mapStateToProps = (state) => {
  return { activeCategory: state.categories.activeCategory };
};
export default connect(mapStateToProps)(ActiveCategory);
