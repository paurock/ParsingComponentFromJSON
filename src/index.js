import React from "react";
import ReactDOM from "react-dom";
import { components } from "../../data";
import parse from "html-react-parser";

const App = () =>
  parse(
    components
      .map(
        c =>
          `<${c.name} ${c.props.map(p => `${p}="${p}"`).join(" ")}>${
            c.content
          }</${c.name}>`
      )
      .join("\n")
  );

const Stringy = () => <App />;

ReactDOM.render(<Stringy />, document.getElementById("root"));
