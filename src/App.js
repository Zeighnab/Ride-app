import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PageBar from './components/layout/PageBar';
import NearestRide from './Pages/NearestRide';
import UpcomingRide from './Pages/UpcomingRide';
import PastRide from './Pages/PastRide';
import { RideProvider } from './context/RideContext';


function App() {

  return (
    <RideProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />

          <PageBar />

          <main>
            <Routes>
              <Route path="/" element={<NearestRide />} />
              <Route path="/upcoming" element={<UpcomingRide />} />
              <Route path="/past" element={<PastRide />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RideProvider>
  );
}

export default App;
