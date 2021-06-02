import React, { useState } from 'react';

/**
 * @author
 * @function InputSearch
 **/

const InputSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <input
      type="text"
      placeholder="Nepal"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default InputSearch;
