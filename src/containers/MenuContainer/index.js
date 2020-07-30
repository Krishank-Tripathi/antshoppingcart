import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMenus} from '../../appRedux/action/menu_action';
import {addToCart} from '../../appRedux/action/cart_action'
import Menu from '../../components/Menu';

// This will be a higher order componet that will call API on to fetch menu list & bind data to the Menu component

class MenuContainer extends PureComponent{

  static propTypes = {
    getMenus: PropTypes.func.isRequired,
}

  componentDidMount() {
    const {getMenus} = this.props;
    // call to fetch menu from API
	getMenus();
  }
  
  render() {
    return (
      <Menu {...this.props} />
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
    getMenus,
	addToCart
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
