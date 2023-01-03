/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */

import "@testing-library/jest-dom/extend-expect";
import { forwardRef } from "react";

import { server } from "./mocks/msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("react-select", () => {
  const mockedReSelect = ({ options, value, onChange, isMulti }, ref) => {
    let selectedOptions = [];

    function handleChange(event) {
      const option = options.find(
        (op) => op.value === event.currentTarget.value
      );

      if (!option) return;

      if (isMulti) {
        selectedOptions = [...selectedOptions, option];

        onChange(selectedOptions);
        return;
      }

      onChange(option);
    }

    return (
      <select
        data-testid="select"
        value={value}
        onChange={handleChange}
        ref={ref}
      >
        {options.map(({ label, value: optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    );
  };

  return forwardRef(mockedReSelect);
});
