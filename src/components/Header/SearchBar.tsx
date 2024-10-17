import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const titles = [
    'Ursinha Dormindo',
    'Conjunto de Bordados',
    'Dias da Semana',
    'Feliz Natal',
    'Hora do Banho',
    'Banho do Príncipe',
    'Panos de Prato',
    'Toalhas' 
  ];

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const lowerSearchTerm = searchTerm.toLowerCase();

    const matchedTitle = titles.find(title => 
      title.toLowerCase().includes(lowerSearchTerm)
    );

    if (matchedTitle) {
      if (matchedTitle.toLowerCase().includes('bordados')) {
        navigate('/bordados');
      } else if (matchedTitle.toLowerCase().includes('toalhas')) {
        navigate('/toalhas');
      } else if (matchedTitle.toLowerCase().includes('panos')) {
        navigate('/panos');
      }
    } else {
      alert("Nenhum item encontrado para sua busca.");
    }
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
