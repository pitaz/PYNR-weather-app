/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";

import WeatherCard from ".";
import {data} from './fixtures';

describe('Weather card Component', () => {
  const props = { 
    data,
    setTime: '',
    setTemp: ''
   };
  const wrapper = render(<WeatherCard {...props} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
