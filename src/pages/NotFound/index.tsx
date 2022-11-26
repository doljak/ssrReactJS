import React from "react";

import "../../core/styles/site/not-found.scss";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="NotFound">
        <div className="NotFound-header">
          <h1>404</h1>
        </div>
      </div>
    );
  }
}

export default Home;
