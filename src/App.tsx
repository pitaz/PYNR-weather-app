import React, { FC } from "react";
import CityWeather from "./pages/CityWeather";
import store from "./redux/store";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ReduxProvider } from "./redux/store/reduxProvider";

Enzyme.configure({ adapter: new Adapter() });

const App: FC = () => (
  <ReduxProvider store={store}>
    <CityWeather />
  </ReduxProvider>
);

export default App;
