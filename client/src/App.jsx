// We have to hid the nav bar when we visit Owner's dashboard
import React from 'react'
import Navbar from './components/Navbar.jsx';
import { useLocation  , Routes , Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import AllRooms from './pages/AllRooms.jsx'
import RoomDetails from './pages/RoomDetails.jsx';
import MyBookings from './pages/MyBookings.jsx';
import Footer from './components/Footer'
import HotelReg from './components/HotelReg'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner"); // Check if the current path includes "owner"
  return(
    <div>
      {!isOwnerPath && <Navbar />} {/*When the user is on the owner dashboard, hide the navbar */}
      {false && <HotelReg /> }
      <div className = "min-h-[70vh]">
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/rooms' element = {<AllRooms />}/>
          <Route path = '/rooms/:id' element = {<RoomDetails />} />
          <Route path = '/my-bookings' element= {<MyBookings />} />

        </Routes>


      </div>
      <Footer />

    </div>
  )
}
export default App;