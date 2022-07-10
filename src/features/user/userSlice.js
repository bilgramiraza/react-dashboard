import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth_token:'',
  email:'',
  password:'',
  fullname:'',
  mobile:0,
  image:'',
  TandC:false,

};

const userSlice = createSlice({
  name:'user',
  initialState,
});

export default userSlice.reducer;