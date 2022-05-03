import React, { useContext } from 'react';
import RideContext from '../context/RideContext';

const UserRide = ({
  id,
  map_url,
  station_path,
  date,
  destination_station_code,
  origin_station_code,
  city
}) => {
  const { user } = useContext(RideContext);

  return (
    <div key={id} className="card card-side bg-base-100 shadow-xl mb-5 w-100">
      <figure>
        <img src={map_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Ride id: {id}</h2>
        <p>Origin Station: {user.station_code}</p>
        <p>
          Station Path:{' '}
          {station_path &&
            station_path.map((code, index) => {
              return <span key={index}>{(index ? ', ' : '') + code}</span>;
            })}
        </p>
        <p>Date: {date}</p>
        <p>Distance: {destination_station_code - origin_station_code} </p>
      </div>
    </div>
  );
};

export default UserRide;
