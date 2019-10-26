import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p className={`text-sm uppercase tracking-wider ${className}`}>{children}</p>
);

export default LabelText;
