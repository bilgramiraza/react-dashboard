import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth_token:'',
  email:'',
  password:'',
  fullname:'',
  mobile:0,
  TandC:false,
};

const userSlice = createSlice({
  name:'user',
  initialState,
  reducer:{
    userRegister:{
      reducer(state,action){
        state ={
          ...state,
          ...action.payload
        };
      },
      prepare(email,firstName,lastName,mobileNo,tandc){
        return {
          payload:{
            email,
            fullname:firstName+' '+lastName,
            mobile:mobileNo,
            TandC:tandc,
          }
        }
      }
    }
  }
});
export const {userRegister} = userSlice.actions;
export default userSlice.reducer;