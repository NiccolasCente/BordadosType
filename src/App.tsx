// Import Essentials:
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Sections:
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Account from "./components/Header/Account"; 

// Import SubSections:
import Panos from "./components/SubSections/Panos";

// Import Results:
import ProductDetails from "./components/Common/ProductDetails";  
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} /> 
        {/* SubSections */}
        <Route path="/panos" element={<Panos />} />
        {/* Resultados - Página de detalhes do produto */}
        <Route path="/produtos/:id" element={<ProductDetails />} /> 
      </Routes>
        {/*Footer */}
      <Footer/>
    </Router>
  );
}

export default App;
