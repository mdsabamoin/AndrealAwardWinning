import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="sidebar p-3"
      style={{
        backgroundColor: "#0A3678",
        minHeight: "100vh",
        color: "white",
        position: "sticky",
        top: 0,
      }}
    >
      <button
        className="btn w-100 mb-3"
        style={{
          backgroundColor: "white",
          color: "#0A3678",
          fontWeight: "600",
        }}
      >
        ⬅ Go Back
      </button>

      <ListGroup variant="flush">
        {[
          "Forthcoming Events",
          "Past Events",
          "INDEE Exhibitions",
          "IESS",
          "Award Presentation",
          "Webinars / Seminars",
          "Past Webinars / Seminars",
          "Other Events",
        ].map((item, index) => (
          <ListGroup.Item
            key={index}
            action
            style={{
              backgroundColor:
                item === "Award Presentation" ? "white" : "transparent",
              color: item === "Award Presentation" ? "#0A3678" : "white",
              fontWeight: item === "Award Presentation" ? "600" : "normal",
              border: "none",
              padding: "12px 10px",
              cursor: "pointer",
            }}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
