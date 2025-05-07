import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
  } from './actions';
  
  const initialState = {
    characters: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHARACTERS_START:
        return { ...state, loading: true, error: null };
      case FETCH_CHARACTERS_SUCCESS:
        return { ...state, loading: false, characters: action.payload };
      case FETCH_CHARACTERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  