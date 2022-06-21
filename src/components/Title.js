import React from 'react';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: 'Planetas',
};

export default Title;
