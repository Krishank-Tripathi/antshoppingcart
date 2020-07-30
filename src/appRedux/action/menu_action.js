import { CALL_API } from '../../middleware/api';
import * as actions from '../../constants/actionTypes';


export const getMenus = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/menu',
    method: 'GET',
    types: [
      actions.GET_MENUS_REQUEST,
      {
        type: actions.GET_MENUS_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
			console.log(json);
            return json;
          });
        }
      },
      actions.GET_MENUS_ERROR
    ]
  }
});



    