import { apiRegister } from '../../services/authService'
import actionTypes from './actionTypes'

export const register = (payload) => async (dispatch) => {
   try {
      const response = await apiRegister(payload)
      console.log(response);
      if (response?.data.error === 0) {
         dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            data: response.data.token
         })
      } else {
         dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: response.data.message
         })
      }
   } catch (error) {
      dispatch({
         type: actionTypes.REGISTER_FAIL,
         data: null
      })
   }
}