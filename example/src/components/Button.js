import React from 'react';

const sizes = {
  normal: `py-3 px-8`,
  lg: `py-4 px-12`
};

const Button = ({ children, className = '', size }) => (
  <button
    type="button"
    className={`bg-primary hover:bg-primary-darker text-white rounded ${
      size ? sizes[size] : sizes.normal
    } ${className}`}
  >
    {children}
  </button>
);

export default Button;
