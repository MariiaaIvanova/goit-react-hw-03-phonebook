import React from 'react';
import { FilterList, Input, Text } from './ContactFilter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterList>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Name"
      />
    </FilterList>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;