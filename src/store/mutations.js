import { GET_idArray, SET_CURMODE, SET_CURPOSITION, GET_ALLINFOS } from './actionTypes';

export default {
  [SET_CURPOSITION](state, positon) {
    state.curPosition = positon;
  },
  [SET_CURMODE](state, mode) {
    state.curMode = mode;
  },
  [GET_idArray](state, arr) {
    state.idArray = arr;
  },
  [GET_ALLINFOS](state, arr) {
    state.allInfos = arr;
  }
}