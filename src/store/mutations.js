import { GET_IPARRAY, SET_CURMODE, SET_CURPOSITION } from './actionTypes';

export default {
  [SET_CURPOSITION](state, positon){
    state.curPosition = positon;
  },
  [SET_CURMODE](state, mode){
    state.curMode = mode;
  },
  [GET_IPARRAY](state, arr){
    state.ipArray = arr;
  }
}