/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App';


test("App contains correct text", () => {
  render(<App />);
  const text = screen.getByText("Welcome to payoneer test!");
  expect(text).toBeInTheDocument();
});