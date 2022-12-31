/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */

import "@testing-library/jest-dom/extend-expect";

jest.mock(
  "react-select",
  () =>
    function ({ options, value, onChange, isMulti }) {
      let selectedOptions = [];
      function handleChange(event) {
        const option = options.find(
          (op) => op.value === event.currentTarget.value
        );

        if (isMulti) {
          selectedOptions = [...selectedOptions, option];

          onChange(selectedOptions);
          return;
        }

        onChange(option);
      }

      return (
        <select data-testid="select" value={value} onChange={handleChange}>
          {options.map(({ label, value: optionValue }) => (
            <option key={optionValue} value={optionValue}>
              {label}
            </option>
          ))}
        </select>
      );
    }
);
