/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CityWeather from ".";

describe('Weather city page', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
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
  const wrapper = shallow(<CityWeather />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
