// Import Essentials:
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Sections:
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Account from "./components/Header/Account"; 

// Import SubSections:
import Panos from "./components/SubSections/Panos";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} /> 
        //SubSections
        <Route path="/panos" element={<Panos />} />
      </Routes>
    </Router>
  );
}

export default App;
