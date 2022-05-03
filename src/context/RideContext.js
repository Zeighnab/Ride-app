import axios from 'axios';
import { createContext, useState } from 'react';

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [rides, setRides] = useState([]);
 



  const fetchData = () => {
    const userAPI = 'https://assessment.api.vweb.app/user';
    const rideAPI = 'https://assessment.api.vweb.app/rides';

       const getUser = axios.get(userAPI);
       const getRide = axios.get(rideAPI);

    axios.all([getUser, getRide]).then(
      axios.spread((...allData) => {
        const allUserCode = allData[0].data;
        const allRides = allData[1].data;

        setUser(allUserCode)
        setRides(allRides)
      })
    )
  }

  return (
    <RideContext.Provider
      value={{
        user,
        rides,
        // select,
        fetchData,
        // handleChange,
      }}
    >
      {children}
    </RideContext.Provider>
  );
};

export default RideContext;
