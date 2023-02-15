import { useState } from 'react';
import PropTypes from 'prop-types';

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
};

useInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

export default useInput;
