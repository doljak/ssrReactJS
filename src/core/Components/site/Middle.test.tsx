import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Middle from "./Middle";

describe("renders Middle", () => {
  it("should render Middle", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Middle />
      </MemoryRouter>,
    );
    const element = getByText(/Optimized/i);
    expect(element).toBeInTheDocument();
  });
});
