import React from 'react'

const City = ({city}) => {
  return (
    <>
      <option value={city} className="bg-neutral">{city}</option>
    </>
  );
}

export default City