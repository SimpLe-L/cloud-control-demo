import { GET_IPARRAY, SET_CURMODE, SET_CURPOSITION} from '../store/actionTypes';
import store from '../store';

function useHooks (){


  function set_mode(mode){

    store.dispatch(SET_CURMODE, mode);
  }
  
  function get_ipArray(arr){
    store.dispatch(GET_IPARRAY, arr);
  }

  function set_curPosition(position){
    store.dispatch(SET_CURPOSITION, position)
  }

  return {
    set_mode,
    get_ipArray,
    set_curPosition
  }
}

export {
  useHooks
}