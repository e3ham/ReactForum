import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/login";
import './index.css';


function App() {

  return (
    
    <>
     <Router>
     <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
