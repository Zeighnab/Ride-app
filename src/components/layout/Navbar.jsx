import React, { useState, useEffect, useContext } from 'react';
import RideContext from '../../context/RideContext';

const Navbar = () => {
  const { user, fetchData } = useContext(RideContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="navbar bg-base-100 mb-7 shadow-xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">Edvora</a>
      </div>

      <div className="flex-none">
        <p className="mr-2 text-white font-bold">{user.name}</p>
      </div>
      <div className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-10 rounded-full">
          <img src={user.url} />{' '}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
