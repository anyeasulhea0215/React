import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import fetchHelper from '../helpers/FetchHelper';
import reduxHelper from '../helpers/ReduxHelper';

const API_URL="/traffic_acc";

export const getList=createAsyncThunk("TrafficAccSlice/getList", async (payload,{rejectWithValue}) => {
    let result=null;

    try{
        result=await fetchHelper.get(API_URL,payload);
    } catch (err){
        result=rejectWithValue(err);
    }
    return result;
});

const TrafficAccSlice=reduxHelper.getDefaultSlice("TrafficAccSlice", [getList]);


export default TrafficAccSlice.reducer;
