import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        placeholder="Szukaj kontaktów..."
        value={filter}
        onChange={handleFilterChange}
      />
    );
  }
}

export default Filter;  

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
