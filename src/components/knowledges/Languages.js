import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 1.5 },
      { id: 2, value: "CSS", xp: 1.1 },
      { id: 3, value: "JavaScipt", xp: 0.5 },
      { id: 4, value: "Node.js", xp: 0.2 },
    ],
    frameworks: [
      { id: 1, value: "BootStrap", xp: 0.2 },
      { id: 2, value: "React.js", xp: 0.2 },
      { id: 3, value: "Node.js", xp: 0.2 },
      { id: 4, value: "Node.js", xp: 0.2 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="framworks & others"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
