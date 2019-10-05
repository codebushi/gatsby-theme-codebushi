import styled from '@emotion/styled';
import React from 'react';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white p-2 rounded`};
`;

export default () => (
  <div className="container mx-auto p-8">
    <p>Homepage</p>
    <Button>hello</Button>
  </div>
);
