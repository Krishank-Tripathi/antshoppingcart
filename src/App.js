import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
/*import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';*/

import configureStore from "./appRedux/store";
import { Provider } from 'react-redux';

import MenuContainer from './containers/MenuContainer';
import CartContainer from './containers/CartContainer';

export const stores = configureStore();

function App() {
  return (
	  <Provider store={stores}>
		<Row style={{border:'2px solid primary',padding:'0 10%',margin:'10%', width:'100%'}}>
		  <Col span={24}>
			<Row>
				<Col span={16}>
				  <MenuContainer/>
				</Col>
				<Col span={6} style={{position: 'fixed',right:'3%', top:'10px', width:'100%'}}>
				  <CartContainer/>
				</Col>
			</Row>
		  </Col>
		</Row>
	  </Provider>	
  );
}


export default App;
