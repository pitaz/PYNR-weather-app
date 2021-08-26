import React, { FC } from "react";
import { Provider } from "react-redux";
import CityWeather from "./pages/CityWeather";
import store from "./redux/store";

const App: FC = () => (
  <Provider store={store}>
    <CityWeather />
  </Provider>
);

export default App;
