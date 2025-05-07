export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharacters = (searchTerm = '') => async (dispatch) => {
  dispatch({ type: FETCH_CHARACTERS_START });

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchTerm}`);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error.message });
  }
};
