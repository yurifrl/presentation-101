import React from "react";

import {
    Slide, CodePane, ComponentPlayground
} from "spectacle";


export default class Presentation extends React.Component {
  render() {
    return (
        <div>
            <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
        lang="jsx"
        source={require("raw-loader!../../assets/deck.example")}
        margin="20px auto"
            />
            </Slide>

            <Slide>
            <ComponentPlayground
        theme="dark"
            />
            </Slide>

            </div>

    );
  }
}
