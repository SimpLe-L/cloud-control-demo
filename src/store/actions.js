import { GET_idArray, SET_CURMODE, SET_CURPOSITION, GET_ALLINFOS } from './actionTypes';

export default {
  [SET_CURPOSITION](commit, positon) {
    commit.commit(SET_CURPOSITION, positon);
  },
  [SET_CURMODE](commit, mode) {
    commit.commit(SET_CURMODE, mode);
  },
  [GET_idArray](commit, arr) {
    commit.commit(GET_idArray, arr);
  },
  [GET_ALLINFOS](commit, arr) {
    commit.commit(GET_ALLINFOS, arr);
  }
}
