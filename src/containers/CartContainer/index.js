import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addToCart, subtractQuantity, addQuantity} from '../../appRedux/action/cart_action';
import Cart from '../../components/Cart';

// This will be a higher order componet that will call API on to fetch menu list & bind data to the Menu component

class CartContainer extends PureComponent{

  static propTypes = {
	addToCart: PropTypes.func.isRequired,
	subtractQuantity: PropTypes.func.isRequired,
	addQuantity: PropTypes.func.isRequired
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Cart {...this.props} />
    );
  }
}



//binding state using
const mapStateToProps = (state) => (
  state.MenuReducer
);

//binding action using dispacther
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
	addToCart,
	subtractQuantity,
	addQuantity
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
