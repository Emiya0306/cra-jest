import React, { PureComponent } from 'react';

export default class ChildComponent extends PureComponent {
  state = {
    isOK: false,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOK } = this.state;
    this.setState({ isOK: !isOK });
  }

  render() {
    const { isOK } = this.state;

    return (
      <div className="child-component">
        <button onClick={this.handleClick}>{isOK ? 'true' : 'false'}</button>
      </div>
    );
  }
}
