/**
 * src/store.json
 *
 * Redux Store 설정파일
 *
 * Redux Store는 어플리케이션의 상태를 관리하는 중앙 저장소 역할을 합니다
 * 이 파일에선, redux Toolkit을 사용하여 Store를 저장합니다
 */

import {configureStore} from '@reduxjs/toolkit';

import CounterSlice from './slices/CounterSlice';
import GradeSlice from './slices/GradeSlice';
import TrafficAccSlice from './slices/TrafficAccSlice';

const store=configureStore({
    reducer:{
 CounterSlice,

 GradeSlice,
 TrafficAccSlice

    }
});

export default store;