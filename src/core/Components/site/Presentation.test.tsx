import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Presentation from "./Presentation";

describe("renders Presentation", () => {
  it("should render Presentation", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Presentation />
      </MemoryRouter>,
    );
    const element = getByText(/Investing/i);
    expect(element).toBeInTheDocument();
  });
});
