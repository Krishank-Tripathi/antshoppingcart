import React from 'react';
import { Row, Col, Button } from 'antd';
import { PlusCircleOutlined, HeartTwoTone } from '@ant-design/icons'; //icon

function Item(props) {

  const onAddClickHandler = (id) => {
	console.log('Add to cart');
	props.onClickHandler(id, props.menuId);
  }		
	
  return (
	<Row style={{border:'2px solid primary', width:'100%'}}>
		<Col span={16}>
			<p>{props.name}</p>
			<p style={{color:'grey'}}>{props.details}</p>
	  </Col>
	   <Col span={4}>
			{props.likes ? props.likes : '0'} <HeartTwoTone twoToneColor="#eb2f96" />
	  </Col>
	   <Col span={4}>	
		<Button
		  danger 
          type="text"
          icon={<PlusCircleOutlined />}
          onClick={() => onAddClickHandler(props.itemId)}>
		  {props.price} &#8377;
        </Button>
	  </Col>
    </Row>
  );
}

export default Item;
