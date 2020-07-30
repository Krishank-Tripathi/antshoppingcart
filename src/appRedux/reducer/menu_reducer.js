import * as actions from '../../constants/actionTypes';

export const initialState = {
  menus: [],
  cartList: [],
  addedItems:[],
  total: 0
};

export default function MenuReducer(state = initialState, action) {
  const { type, payload, itemId, menuId, cartId } = action;
  
  switch (type) {
    case actions.GET_MENUS_REQUEST:
      return {
        ...state,
        menus: [],
      };
    case actions.GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: payload,
      };
    case actions.ADD_TO_CART:
	  // here item id will have itemId_itemName le split item
	  let arr = itemId.split('_');
	  let item_name = arr[0];
	  let item_id = parseInt(arr[1]);
	  console.log("MenuId: " + menuId +" ItemId: " + item_id + " Name:" + item_name);
	  let addedMenu = state.menus.find(menu => menu.id === parseInt(menuId));
	  
	  let addedItem = addedMenu.items.find(item => item.id === item_id);
	  addedItem.menuId = parseInt(menuId);
	  addedItem.cartId = (item_name + '_'+ item_id + '_' + menuId);
	 
	  let existedItem = state.addedItems.findIndex(item => (item.menuId === menuId && item.id === item_id));
	 if(existedItem > -1){
			addedItem.quantity += 1
			return {
				...state,
				 total: state.total + addedItem.price, 
			}
	  }else{
		addedItem.quantity = 1
            //calculating the total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
            }
	  };
	  
     case actions.ADD_QUANTITY:{
		//let newItems =  [...state.addedItems];
		let cart_id = cartId;
		let addcurrentItem = state.addedItems.find(item => item.cartId === cart_id);
		addcurrentItem.quantity += 1;
		let addednewTotal = state.total + addcurrentItem.price; 
		return{
                ...state,
                total : addednewTotal,
         }
		};
		
	 case actions.SUB_QUANTITY:{
		let cart_id = cartId;
		let addedItem = state.addedItems.find(item => item.cartId === cart_id);
		
		if(addedItem.quantity === 1){
			let new_items = state.addedItems.filter(item=>item.cartId !== cart_id);
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
		}else{
			addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
		} 
		};	
    default:
      return state;
  }
}
