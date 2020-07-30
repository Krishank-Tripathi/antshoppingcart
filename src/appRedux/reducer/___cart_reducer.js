import * as actions from '../../constants/actionTypes';

export const initialState = {
  items:[],
  cartList: [],
  addedItems:[],
  total: 0
};

export default function CartReducer(state = initialState, action) {
  const { type, payload, itemId, menuId } = action;
  switch (type) {
	case actions.GET_MENUS_SUCCESS:
      return {
        ...state,
        items: payload,
      };
    case actions.ADD_TO_CART:
	  let selectedMenu = state.items.find(menu => menu.id === menuId)
	  // here item id will have itemId_itemName le split item
	  let {item_id, item_name} = itemId.split('_')
	  let addedItem = selectedMenu.items.find(item => (item.name === item_name && item.id === item_id))
	  let existedItem = selectedMenu.items.findIndex(item => (item.name === item_name && item.id === item_id))
	  if(existedItem > -1){
		addedItem.quantity += 1
		return {
			...state,
             total: state.total + addedItem.price 
		}
	  }else{
		addedItem.quantity = 1
            //calculating the total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
	  };
    default:
      return state;
  }
}
