import React, { useState } from "react";
import { Table, Pagination, Form } from "react-bootstrap";

const AwardTable = ({ title, data }) => {
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginated = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="award-box">
      <div className="award-header">{title}</div>

      <Table hover responsive className="award-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Place</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((item, i) => (
            <tr key={i}>
              <td className="award-name-link">{item.name}</td>
              <td>{item.date}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination-section">
        <div className="d-flex align-items-center gap-2">
          <span>Rows per page:</span>

          <Form.Select className="rows-select" size="sm" onChange={() => {}}>
            <option>5</option>
          </Form.Select>

          <span>
            {(page - 1) * rowsPerPage + 1}-
            {Math.min(page * rowsPerPage, data.length)} of {data.length}
          </span>
        </div>

        <div className="pagination-buttons">
          <button disabled={page === 1} onClick={() => setPage(1)}>
            ⏮
          </button>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            ◀
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            ▶
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
          >
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardTable;
