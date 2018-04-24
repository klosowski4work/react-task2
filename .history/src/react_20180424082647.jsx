import * as React from "react";

export class Hello extends React.PureComponent {
  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}
