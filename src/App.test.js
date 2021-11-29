import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Square from "./Square.js";
// unit test
//integration test
//end to end testing

//test block
// render a component we do test
//find elements we want to interact
//interact with those elements
//assert that the results are as expected
//test or it

//accessible for everyone
//getByRole
//getByLabelText
//getByPlaceholderText
//getByText

//testId
//getByTestId

// const Button = ({ children, onClick }) => (
//   <button onClick={onClick}>{children}</button>
// );

test("calls props on click", () => {
  const handleClick = jest.fn();
  render(<Square value="notShow" onClick={handleClick} />);
  expect(handleClick).toHaveBeenCalledTimes(0);
});
