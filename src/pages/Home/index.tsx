import React from "react";

import TopMenu from "../../core/Components/site/TopMenu";
import HeadMenu from "../../core/Components/site/HeadMenu";
import Body from "../../core/Components/site/Body";

import { Link } from "../../core/interface/link";

interface IProps {}
interface IState {}
class Home extends React.Component<IProps, IState> {
  public linksTopMenu: Link[] = [
    {
      class: "top-menu",
      label: "individuals",
      link: "/",
    },
    {
      class: "top-menu",
      label: "employers",
      link: "/",
    },
    {
      class: "top-menu",
      label: "advisors",
      link: "/",
    },
  ];
  public setButtonsTopMenu() {
    return this.linksTopMenu;
  }
  public render() {
    return [
      <TopMenu key={0} buttons={this.setButtonsTopMenu()} />,
      <HeadMenu key={1} />,
      <Body key={2} />,
    ];
  }
}

export default Home;
