import https from "../../config/https";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherTypes";


interface Error {
  error: {};
}
const fetchWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST,
});

const fetchWeatherSuccess = (payload: any) => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});

const fetchWeatherFailure = (error: Error) => ({
  type: GET_WEATHER_FAILURE,
  error,
});

export const fetchWeather = (unit: string) => async (dispatch: any) => {
  try {
    dispatch(fetchWeatherRequest());
    const request = await https.get(
      `/forecast?q=Munich,de&units=${unit}&APPID=${process.env.APPID}&cnt=40`
    );
    return dispatch(fetchWeatherSuccess(request));
  } catch (error) {
    return dispatch(fetchWeatherFailure(error));
  }
};
