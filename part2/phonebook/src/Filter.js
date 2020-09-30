import React from 'react';

const Filter = (props) => {
  return (
    <div>
      search by name{' '}
      <input
        value={props.nameToSearch}
        onChange={props.handleNameToSearchChange}
      />
    </div>
  );
};

export default Filter;
