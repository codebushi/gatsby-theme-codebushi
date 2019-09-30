import styled from '@emotion/styled';
import React from 'react';

const Description = styled.div`
  padding: 20px;
  background: #000;
  color: #fff;
`;

export default () => (
  <div className="container mx-auto p-8">
    <p>Homepage in a user's site</p>
    <p>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </p>
    <Description>Emotion</Description>
  </div>
);
