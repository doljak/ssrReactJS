import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import HeadMenu from "./HeadMenu";

describe("renders HeadMenu", () => {
  it("should render HeadMenu", () => {
    const { getByText } = render(
      <MemoryRouter>
        <HeadMenu />
      </MemoryRouter>,
    );
    const linkElement = getByText(/Investing/i);
    expect(linkElement).toBeInTheDocument();
  });
});
