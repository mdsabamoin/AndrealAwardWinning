// src/components/SearchBar.jsx
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar-wrapper">
      <InputGroup className="search-input-group">
        <InputGroup.Text className="search-icon">
          <FaSearch />
        </InputGroup.Text>

        <Form.Control
          type="text"
          placeholder="Search awards, categories, regions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
