import React from "react";
import {
  fireEvent,
  getAllByText,
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TopMenu from "./TopMenu";
import { Link } from "../../interface/link";

const linksTopMenu: Link[] = [
  {
    class: "top-menu",
    label: "teste para prop",
    link: "https://www.test.com/",
  },
  {
    class: "top-menu",
    label: "teste para prop dois",
    link: "https://www.test.com/",
  },
];

describe("renders App", () => {
  it("should linksTopMenu be Type of Array<Link>", () => {
    expect(typeof linksTopMenu).toBe("object");
  });
  it("should render TopMenu", (done) => {
    const { queryAllByText } = render(
      <MemoryRouter>
        <TopMenu buttons={linksTopMenu} />
      </MemoryRouter>,
    );
    const linkElement = queryAllByText(/teste para prop/i);
    expect(linkElement[0]).toBeInTheDocument();
    done();
  });

  it("should when link get clicked, go to href link", (done) => {
    const { getByText } = render(
      <MemoryRouter>
        <TopMenu buttons={linksTopMenu} />
      </MemoryRouter>,
    );
    const linkElementTwo = getByText(/teste para prop dois/i);
    fireEvent.click(linkElementTwo);

    expect(
      screen.getByText(/teste para prop dois/i).closest("a"),
    ).toHaveAttribute("href", "https://www.test.com/");
    done();
  });
});
