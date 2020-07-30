import React from 'react';
import { Row, Col, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import './cart.css'

function Cart(props) {
  
  console.log(props);
  
  const onSubQuantity = (cartId) =>{
	console.log("You CartId: " + cartId);
	props.subtractQuantity(cartId);
  }
  
  const onAddQuantity = (cartId) =>{
	console.log("You CartId: " + cartId);
	props.addQuantity(cartId);
  }
  
  const AddButton = (props) => (
	<Button
		  primary 
          type="text"
          icon={<PlusCircleOutlined />}
          onClick={() => onAddQuantity(props.cartId)}>
     </Button>
  )
  const SubButton = (props) => (
	<Button
		  primary 
          type="text"
          icon={<MinusCircleOutlined />}
          onClick={() => onSubQuantity(props.cartId)}>
     </Button>
  )
  
  const Item = (props) => (
	 <div key={props.cartId} style={{width:'100%'}}>
		<Row>
		   <Col span={12}>
				<p>{props.item.name}</p>
				<p>Qty: {props.item.quantity}</p>
		   </Col>
		   <Col span={8}>
				{props.item.quantity ? (
				<Row> 
				<Col span={10}><AddButton cartId={props.item.cartId}/></Col> 
				<Col span={10} offset={4}><SubButton cartId={props.item.cartId}/> </Col> 
				</Row> ): ''} 
		  </Col>
	      <Col span={4}>	
			   <Row><Col span={24}> {parseInt(props.item.price) * parseInt(props.item.quantity)} &#8377; </Col></Row>
	      </Col>
		</Row>
	 </div>
  )
  
 
  const AddedItems = (props) => (
	props.addedItems ? props.addedItems.map(item => <Item item={item}/>): (<p> Nothing </p>)
  )
  return (
    <Row className="container">
		<Col span={24}>
            <div className="cart">
                  <h3>Your Order</h3>
                  <div className="collection">
                       <AddedItems {...props}/>
                 </div>
				 <Row className="total">
					<Col span={8}>Total</Col>
					<Col span={8} offset={8}>{props.total} &#8377;</Col>
				 </Row>
           </div>  
		 </Col> 
    </Row>
  );
}
export default Cart;
