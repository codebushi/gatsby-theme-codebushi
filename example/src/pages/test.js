import styled from '@emotion/styled';
import React from 'react';

const Description = styled.div`
  padding: 20px;
  background: #000;
`;

export default () => (
  <div className="container mx-auto p-8">
    <p>
      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Indigo
      </button>
    </p>
    <Description>This is Emotion</Description>
  </div>
);
