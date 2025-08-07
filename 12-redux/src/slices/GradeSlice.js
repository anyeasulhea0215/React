import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import fetchHelper from '../helpers/FetchHelper';

const API_URL="/grade";

export const getList=createAsyncThunk("GradeSlice/getList", async (payload,{rejectWithValue}) => {
    let result=null;

    try{
        result=await fetchHelper.get(API_URL);
    } catch (err){
        result=rejectWithValue(err);
    }
    return result;
});

//Slice 객체 셍성
const GradeSlice=createSlice({
    name:"GradeSlice",

    initialState: {
      status:200,
      message:"OK",
      item:null,
      timestamp:null,
      loading:false,
    },

    reducers: {},

    extraReducers: (builder) => {


       builder.addCase(getList.pending ,(state, {meta,payload}) => {
        return {...state,loading: true}
       });

       builder.addCase(getList.fulfilled ,(state, {meta,payload}) => {
        return {...payload,loading: false}
       });

       builder.addCase(getList.rejected ,(state, {meta,payload}) => {
        return {
            ...state,
            loading: false,
            status:payload.status || 0,
             message:payload.message || 'Unknown Error'
            }
       });

    },
});

//reducer객체 내보내기
export default GradeSlice.reducer;