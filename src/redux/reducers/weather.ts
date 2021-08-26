import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherTypes";

const weatherInitialState = {
  data: [],
  isLoading: false,
  imageProgress: {
    loadedBytes: 0,
    totalBytes: 0,
  },
  image: {},
};

/**
 * This reducer changes the weather state of the application
 *
 * @param {Object} [state=weatherInitialState]
 * @param action = weatherActions
 *
 * @returns {Object} state
 */
export const reducer = (state = weatherInitialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: [...action.centers],
        isLoading: false,
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
