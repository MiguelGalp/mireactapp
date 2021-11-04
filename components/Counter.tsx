import React, { useState } from 'react';

export const Counter: React.FC = () => {
  // value is the current value;
  // setValue is an updater function;
  // We can also pass an initial value
  // into useState as an argument.
  const [value, setValue] = useState(false);
 
  return <>
    <span>{value.toString()}</span>
    <button
      type="button"
      // To update pass a new value
      // into updater function:
      onClick={() => setValue(value =>!value)}>?
    </button>
<button
      type="button"
      onClick={() => setValue(value =>!value)}>?
    </button>
   </>
}

