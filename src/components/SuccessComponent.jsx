import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Data }= location.state;
    console.log(Data)
  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(Data).map(([key, value]) => (
          <div className="mb-4" key={key}>
            <label className="block font-semibold mb-1">{key}</label>
            <p className="text-gray-800">{value}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRedirect}>GO TO FORM</button>
    </div>
  );
}

export default SuccessComponent;
