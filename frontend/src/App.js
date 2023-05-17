import './App.css';
import Header from './components/Management/Header';
import AddHotel from './components/Management/AddHotel';
import AllHotels from './components/Management/AllHotels';
import Home from './components/Management/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UpdateHotel from './components/Management/UpdateHotel';
import Footer from './components/Management/Footer';
import HotelTable from './components/Management/HotelTable';
import Viewmore from './components/Management/ViewMore';
import ReportHotel from './components/Management/ReportHotel';
import BookHotel from './components/Management/BookHotel';
import BookingTable from './components/Management/BookingTable';



function App() {
  return (



    <Router>
      <div>
        <Header/>
        
        <Routes>
          
          <Route path= '/' element={<AllHotels/>} />
          <Route path='/addHOTEL' element={<AddHotel/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/updateHOTEL/:id' element={<UpdateHotel/>} />
          <Route path='/allHOTEL-table' element={<HotelTable/>} />
          <Route path='/all-table/updateHOTEL/:id' element={<UpdateHotel/>} />
          <Route path='/viewHOTEL/:id' element={<Viewmore/>} />
          <Route path='/reportHotel' element={<ReportHotel/>} />
          <Route path='/bookHOTEL' element={<BookHotel/>} />
          <Route path='/all-table/bookin' element={<BookingTable/>} />
          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
