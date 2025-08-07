import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchHelper  from '../helpers/FetchHelper';
import reduxHelper from '../helpers/ReduxHelper';

const API_URL= '/professors';

//비동기 액션 생성자들

export const getList=  reduxHelper.get("ProfessorSlice/getList", API_URL);


//getItem이 필요없는 이유:
/**
 * 목록 조회에서 모든 데이터를 받아오기 떄문 ->getList
 * 개별 아이템 조회가 불필요함
 * export const getItem=reduxHelper.get("ProfessorSlice/getItem",API_URL);
 */


export const postItem= reduxHelper.post("ProfessorSlice/postItem", API_URL);

export const putItem= reduxHelper.put("ProfessorSlice/putItem", API_URL,(payload) =>{

    const id=payload.get("id");
    payload.delete("id");

    return{
        url: `${API_URL}/${id}`,
        params:payload
    };
} );


export const deleteItem= reduxHelper.delete("ProfessorSlice/deleteItem", API_URL,(id)=>{
      return{
        url: `${API_URL}/${id}`,
        params:{}
    };
});

const ProfessorSlice=reduxHelper.getDefaultSlice("ProfessorSlice",[getList,postItem,putItem,deleteItem],{
    [postItem.fulfilled]: (state,{meta,payload}) => {
       console.group("[ProfessorSlice] postItem.fulfilled");
       console.log("meta.arg",meta.arg);  //백엔드에 보내기 위해 Action함수에 전달한 파라미터가 meta.arg에 담겨져있음
       console.log("payload",payload);   //백엔드로부터 받은 응답 데이터
       console.groupEnd();

         return{
            ...state,
            loading:false,
            item:[...state.item, payload.item]  //새로 추가된 교수 데이터를 상태에 추가
       };
     },
     [putItem.fulfilled]: (state,{meta,payload}) => {
       const updatedItem=payload.item;

       state.item=state.item.map(professor =>
        professor.id === updatedItem.id ? updatedItem : professor
       );
       state.loading= false;
     },

    [deleteItem.fulfilled]: (state,{meta,payload}) => {
       console.group("[ProfessorSlice] deleteItem.fulfilled");
       console.log("meta.arg",meta.arg);  //백엔드에 보내기 위해 Action함수에 전달한 파라미터가 meta.arg에 담겨져있음
       console.log("payload",payload);   //백엔드로부터 받은 응답 데이터
       console.groupEnd();

        const id=meta.arg;

         return{
            ...state,
            loading:false,
            item:state.item.filter(item => item.id !== id)
       };
     }
} );

export default ProfessorSlice.reducer;
