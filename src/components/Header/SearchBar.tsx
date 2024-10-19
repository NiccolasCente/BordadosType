import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const lowerSearchTerm = searchTerm.toLowerCase();

    if (lowerSearchTerm.includes('dias') || lowerSearchTerm.includes('semana') || lowerSearchTerm.includes('da semana')) {
      navigate('/produtos/001');
    } else if (lowerSearchTerm.includes('natal') || lowerSearchTerm.includes('feliz natal')) {
      navigate('/produtos/002');
    } else if (lowerSearchTerm.includes('ursinha') || lowerSearchTerm.includes('ursinha dormindo')) {
      navigate('/produtos/003');
    } else if (lowerSearchTerm.includes('conjunto de bordados')) {
      navigate('/produtos/004');
    } else if (lowerSearchTerm.includes('príncipe') || lowerSearchTerm.includes('principe') || lowerSearchTerm.includes('do príncipe') || lowerSearchTerm.includes('do principe')) {
      navigate('/produtos/005');
    } else if (lowerSearchTerm.includes('hora') || lowerSearchTerm.includes('hora do banho') || lowerSearchTerm.includes('do banho')) {
      navigate('/produtos/006');
    } else if (lowerSearchTerm.includes('bordados')) {
      navigate('/bordados');
    } else if (lowerSearchTerm.includes('toalhas')) {
      navigate('/toalhas');
    } else if (lowerSearchTerm.includes('panos')) {
      navigate('/panos');
    } else {
      alert("Nenhum item encontrado para sua busca.");
    }

    setSearchTerm("");
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Panos de prato, bordados e toalhas"
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" variant="outline-secondary">
        <FaSearch style={{ color: "#CD853F" }} />
      </Button>
    </Form>
  );
};

export default SearchBar;
