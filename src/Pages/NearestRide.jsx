import React, { useState, useEffect, useContext } from 'react';
import RideContext from '../context/RideContext';
import UserRide from '../user/UserRide';
import uuid from 'react-uuid';

const NearestRide = () => {
  const { rides, user, fetchData } = useContext(RideContext);

  let code = user.station_code

  useEffect(() => {
    fetchData();
    
  }, []);

  return(
    <div>
      {rides.map((ride) => {
        let number = ride.station_path

        if(number.includes(code)) {
         return <UserRide key={uuid()} {...ride} />
        } 

      
      })}
      
    </div>
  )


};

export default NearestRide;
