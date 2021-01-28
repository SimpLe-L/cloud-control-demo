import { GET_ALLINFOS, GET_idArray, SET_CURMODE, SET_CURPOSITION } from '../store/actionTypes';
import store from '../store';

function useHooks() {


  function set_mode(mode) {

    store.dispatch(SET_CURMODE, mode);
  }

  function get_idArray(arr) {
    store.dispatch(GET_idArray, arr);
  }

  function set_curPosition(position) {
    store.dispatch(SET_CURPOSITION, position)
  }

  function get_allInfos(arr) {
    store.dispatch(GET_ALLINFOS, arr);
  }

  return {
    set_mode,
    get_idArray,
    set_curPosition,
    get_allInfos
  }
}

export {
  useHooks
}