import * as React from "react";

export class Hello extends React.PureComponent {
  render() {
    return <div>{this.props.greeting}</div>;
  }
}
