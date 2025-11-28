import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AwardTable from "../components/AwardTable";
import SearchBar from "../components/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import "./Award.css";

const AwardPresentation = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://www.eepcindia.org/backend/api/new_award_presentation_test")
      .then((res) => res.data.status && setData(res.data.data))
      .catch(console.log);
  }, []);

  const filteredData = data.filter((item) => {
    if (!searchTerm.trim()) return true;

    const search = searchTerm.toLowerCase();

    return (
      item.category?.toLowerCase().includes(search) ||
      item.name?.toLowerCase().includes(search) ||
      item.type?.toLowerCase().includes(search) ||
      item.company?.toLowerCase().includes(search) ||
      item.place?.toLowerCase().includes(search)
    );
  });

  const filterType = (type) =>
    filteredData.filter((item) => item.type === type);

  return (
    <Container fluid className="award-container">
      {/* Search bar at top */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Row>
        <Col
          md={3}
          className="sidebar-wrapper"
          style={{ backgroundColor: "white" }}
        >
          <Sidebar />
        </Col>

        <Col md={9} className="content-wrapper">
          <AwardTable
            title="NATIONAL AWARDS"
            data={filterType("National Awards")}
          />
          <AwardTable
            title="EASTERN REGION"
            data={filterType("Eastern Region")}
          />
          <AwardTable
            title="WESTERN REGION"
            data={filterType("Western Region")}
          />
          <AwardTable
            title="NORTHERN REGION"
            data={filterType("Northern Region")}
          />
          <AwardTable
            title="SOUTHERN REGION"
            data={filterType("Southern Region")}
          />
          <AwardTable
            title="QUALITY AWARD"
            data={filterType("Quality Award")}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AwardPresentation;
