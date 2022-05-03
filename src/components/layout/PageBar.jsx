import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RideContext from '../../context/RideContext';
import State from '../../user/State';
import City from '../../user/City';
import NearestRide from '../../Pages/NearestRide';
import uuid from 'react-uuid';

const PageBar = () => {
  const { rides } = useContext(RideContext);

  return (
    <div className="navbar flex mx-auto">
      <div className="md:hidden container mx-auto">
        <div className="flex px-2 mx-2 w-3/5 justify-evenly">
          <div className="flex-initial">
            <Link to="/" className="link link-hover capitalize">
              nearest ride
            </Link>
          </div>
          <div className="flex-initial">
            <Link to="/upcoming" className="link link-hover capitalize">
              upcoming ride
            </Link>
          </div>
          <div className="flex-initial">
            <Link to="/past" className="link link-hover capitalize">
              past ride
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 md:block hidden">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-circle btn-ghost">
            <FaBars />
          </label>
          <ul
            tabIndex="0"
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="link link-hover capitalize">
                nearest ride
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="link link-hover capitalize">
                upcoming ride
              </Link>
            </li>
            <li>
              <Link to="/past" className="link link-hover capitalize">
                past ride
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-none">
        <div className="flex justify-end mr-8">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <ul
              tabIndex="0"
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="ml-4 mt-2 font-bold">Filter</li>
              <li></li>
              <li>
                <select className="select w-full max-w-xs">
                  <option className="bg-neutral" disabled selected>
                    State
                  </option>

                  {rides.map((ride) => {
                    return <State key={uuid()} {...ride} />;
                  })}
                </select>
              </li>
              <li>
                <select
                  className="select w-full max-w-xs"
                >
                  <option className="bg-neutral" disabled selected>
                    City
                  </option>

                  {rides.map((ride) => {
                    return <City key={uuid()} {...ride} />;
                  })}
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBar;
