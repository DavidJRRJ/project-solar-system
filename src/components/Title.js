/* eslint-disable react/prop-types */
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <title>
        <h2>{headline}</h2>
      </title>
    );
  }
}

export default Title;
