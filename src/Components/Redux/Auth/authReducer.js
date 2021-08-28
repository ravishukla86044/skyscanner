// import {setUser,removeUser } from "../../Pages/Authentication/localstorage_s"
import { PAYMENT_SUCCESS} from "./authActionTypes"


let initState ={
    isPaymentSuccess:false,
   
}
// console.log(initState.isAuth);

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
      
        case PAYMENT_SUCCESS:{
            // alert('payment SuccessFull')
            return {
               
                ...state,
                isPaymentSuccess:payload,
            }
        }
        default:{
            return{
                ...state
            }
        }

    }
}
