import React, { FC } from "react";
import { Provider } from "react-redux";
import CityWeather from "./pages/CityWeather";
import store from "./redux/store";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const App: FC = () => (
  <Provider store={store}>
    <CityWeather />
  </Provider>
);

export default App;
