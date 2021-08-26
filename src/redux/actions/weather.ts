import https from "../../config/https";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherTypes";

interface payload {
  payload: {};
}

interface Error {
  error: {};
}
const fetchWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST,
});

const fetchWeatherSuccess = (payload: payload) => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});

const fetchWeatherFailure = (error: Error) => ({
  type: GET_WEATHER_FAILURE,
  error,
});

export const fetchWeather = () => async (dispatch) => {
  try {
    dispatch(fetchWeatherRequest());
    const request = await https.get(
      `/forecast?q=Munich,de&APPID=a640222ebfa06f41d201d0518fff673a&cnt=40`,
      {
        headers: {'Access-Control-Allow-Origin': 'http://localhost:9000'},

      }
    );
    return dispatch(fetchWeatherSuccess(request));
  } catch (error) {
    return dispatch(fetchWeatherFailure(error));
  }
};
