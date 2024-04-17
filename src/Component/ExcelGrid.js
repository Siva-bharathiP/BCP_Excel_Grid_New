import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import "../styles/dashboard.css";
import "../styles/ExcelGrid.css";


const ExcelGrid = ({
  retriveData,
  handleEdit,
  handleCancel,
  handleInputChange,
  handleSave,
  handleDelete,
  editedRowId,
  editedRowData,
  roleID
}) => {
  return (
    <Container fluid className="mt-5">
      <Row className="row Render-Row">
        <Col className="col Render-Col">
          <div className="table-responsive render">
            <Table striped bordered hover>
              <thead className="sticky-header">
                <tr>
                  {Object.keys(retriveData[0] || {}).map((key) => (
                    key !== 'id' && (
                      <th key={key}>{key}</th>
                    )
                  ))}
                  <th className="action-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {retriveData.map((row) => (
                  <tr key={row.id}>
                    {Object.entries(row).map(([key, value]) => (
                      key !== 'id' && (
                        <td key={key}>
                          {editedRowId === row.id ? (
                            <input
                              type="text"
                              className='GridInput'
                              value={editedRowData[key]}
                              onChange={(e) => handleInputChange(e, key)}
                            />
                          ) : (
                            <span>{value}</span>
                          )}
                        </td>
                      )
                    ))}
                    <td className="action-cell">
                     
                        <div className="action-buttons">
                          <button
                            className="btn btn-sm Edit"
                            onClick={() => handleEdit(row.id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                            
                          </button>
                          <button
                            className="btn btn-sm Delete"
                            onClick={() => handleDelete(row.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExcelGrid;
