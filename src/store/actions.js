import { GET_IPARRAY, SET_CURMODE, SET_CURPOSITION } from './actionTypes';

export default {
  [SET_CURPOSITION](commit, positon){
    commit.commit(SET_CURPOSITION, positon);
  },
  [SET_CURMODE](commit, mode){
    commit.commit(SET_CURMODE, mode);
  },
  [GET_IPARRAY](commit, arr){
    commit.commit(GET_IPARRAY, arr);
  }
}
