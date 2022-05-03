import React, {useContext} from 'react'
import RideContext from '../context/RideContext';
import UserRide from '../user/UserRide';
import uuid from 'react-uuid';

const PastRide = () => {
 const { rides, user } = useContext(RideContext);

 let code = user.station_code;

 return (
   <>
     {rides.map((ride) => {
       let number = ride.station_path;
       let date = ride.date;
       let next = date.split('')[1] === '2';

       if (number.includes(code) && next) {
         return <UserRide key={uuid()} {...ride} />;
       }
     })}
   </>
 );
}

export default PastRide