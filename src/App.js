import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Planatrip from "./pages/Planatrip";
import Booking from "./pages/Booking";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import "./styles/Fonts.css"; 


function App() {
  return (
    
   <div>
    
   
      
        <div className="App">
          <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planatrip" element={<Planatrip/>} />
                <Route path="/about" element={<About />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />

              </Routes> 
              <Footer/> 
          </Router> 
        </div>
        
       </div>
       
      
    

  );
}

export default App;
