// Import Essentials:
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Sections:
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Account from "./components/Header/Account"; 
import AboutMe from './components/Sections/AboutMe';
import Services from './components/Sections/Services';
// Import SubSections:
import Panos from "./components/SubSections/Panos";
import Bordados from './components/SubSections/Bordados';
import Toalhas from "./components/SubSections/Toalhas";
import AllProducts from './components/Sections/AllProducts';
// Import Results:
import ProductDetails from "./components/Common/ProductDetails";  
import Footer from './components/Footer/Footer';

// Import Contexts
import { CartProvider } from './components/Common/CartContext';
import { FavoritesProvider } from './components/Common/FavoritesContext'; 
import NewProducts from './components/Sections/NewProducts';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <Header />
          <Routes>
            {/*Sections */}
            <Route path="/" element={<Main />} />
            <Route path="/account" element={<Account />} /> 
            <Route path="/novosprodutos" element={<NewProducts />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobremim" element={<AboutMe />} />

            {/* SubSections */}
            <Route path="/panos" element={<Panos />} />
            <Route path="/bordados" element={<Bordados />} />
            <Route path="/toalhas" element={<Toalhas />} />
            <Route path="/todososprodutos" element={<AllProducts />} />
            {/* Resultados - Página de detalhes do produto */}
            <Route path="/produtos/:id" element={<ProductDetails />} /> 
          </Routes>
          <Footer />
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
