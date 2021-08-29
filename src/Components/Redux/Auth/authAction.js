import axios from "axios";
import {
 
  PAYMENT_SUCCESS
} from "./authActionTypes";



export const paymentSuccess = payload => {
  return {
    type: PAYMENT_SUCCESS,
    payload
  };
};



export const setPaymentSucceeded = (payload) => dispatch => {
  return dispatch(paymentSuccess(payload));
};

