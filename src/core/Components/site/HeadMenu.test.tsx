import React from "react";
import { render } from "@testing-library/react";
import HeadMenu from "./HeadMenu";

describe("renders HeadMenu", () => {
  it("should render HeadMenu", (done) => {
    const { getByText } = render(<HeadMenu />);
    const linkElement = getByText(/Investing/i);
    expect(linkElement).toBeInTheDocument();
    done();
  });
});
