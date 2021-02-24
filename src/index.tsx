import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// import 'core-js'
interface HelloProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<HelloProps> {
  render() {
    return (
      <>
        <div className="app-text">
          {this.props.compiler} and {this.props.framework}!
        </div>
      </>
    );
  }
}

ReactDom.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
