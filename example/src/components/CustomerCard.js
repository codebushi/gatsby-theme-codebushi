import React from 'react';

const CustomerCard = () => (
  <div
    className="p-12 rounded-lg"
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    <p className="text-xl font-semibold">
      Without Parse.ly, I wouldn't have bet in a million years that that story did as well as it
      did.
    </p>
    <p className="mt-6">
      This is the first time we've ever had a unified real-time look at every single major traffic
      source.
    </p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src="https://www.parse.ly/static/546b20b6bb1be42b1a6fa71c3f1fb937/cb3d3/headshot-morgioni-mark.jpg"
        alt="Person Name"
      />
      <div>
        <p>Mark Morgioni</p>
        <p className="text-sm text-gray-600">Director of Research and Data</p>
      </div>
    </div>
  </div>
);

export default CustomerCard;
