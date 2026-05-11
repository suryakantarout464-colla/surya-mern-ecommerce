import axios from "axios";
import * as actionTypes from '../constants/cartConstant'

const URL = 'http://localhost:8000';


export const addToCart = (id, quantity) => async(dispatch)=> {
try{
  const {data} = await axios.get(`${URL}/product/${id}`);

  dispatch({ type: actionTypes.ADD_TO_CART, payload:{...data,quantity}})

}catch(error){
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message})

}
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id});

} 


export const increaseQty = (id) => (dispatch) => {
  dispatch({ type: actionTypes.INCREASE_QTY, payload: id });
};

export const decreaseQty = (id) => (dispatch) => {
  dispatch({ type: actionTypes.DECREASE_QTY, payload: id });
};