/**
 * @jest-environment jsdom
 */

import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../redux/store";
import CityWeather from ".";
import { ReduxProvider } from "../../redux/store/reduxProvider";
import { useDispatch } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });


describe("Weather city page", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const wrapper = ({ children }: any) => (
    <ReduxProvider store={store}>{children}</ReduxProvider>
  );
  const { result } = renderHook(() => useDispatch(), { wrapper });
  // const wrapper = shallow(<CityWeather />);
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
