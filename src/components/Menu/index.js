import React from 'react';
import { List } from 'antd';
import Item from '../Menu/Item';

function Menu(props) {

  const handleClick = (id, menuId)=>{
     props.addToCart(id, menuId); 
  }
  
  const MenuItem = (props) => (
		<Item key={props.item.name +'_'+ props.item.id} itemId={props.item.name +'_'+ props.item.id} menuId={props.menu_id} name={props.item.name} details={props.item.description} price={props.item.price} likes={props.item.likes} onClickHandler={handleClick} />
   );
  
   const MenuPanel = (props) => (
		<div key={props.menu.id} style={{width:'100%'}}>
			{
				<List
				  size="large"
				  header={<div>{props.menu.name}</div>}
				  footer={<div> --------------- </div>}
				  bordered
				  dataSource={props.menu.items}
				  renderItem={item => <List.Item>{<MenuItem menu_id={props.menu.id} item={item}/>}</List.Item>}
			   />
			}
		</div>
   );
  
   const PaneList = (props) =>(
		<List
		  size="large"
		  header={<div>Menus</div>}
		  footer={<div>End Of Menu</div>}
		  bordered
		  dataSource={props.menus}
		  renderItem={item => <List.Item>{<MenuPanel menu={item}/>}</List.Item>}
       />
   );
	
	
  return (
    <div>
	   {
		  props.menus ? <PaneList {...props}/> : <div  label='Loading Data...'></div>	
	   }
    </div>
  );
}
export default Menu;
