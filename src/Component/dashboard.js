import React, { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dashboard.css";
import ExcelGrid from "./ExcelGrid";
import { useDropzone } from "react-dropzone";

function Dashboard() {
    const [retriveData, setRetriveData] = useState([]);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [editedRowId, setEditedRowId] = useState(null);
    const [editedRowData, setEditedRowData] = useState({});
    const [roleID, setRoleID] = useState('');
    const [rowToDelete, setRowToDelete] = useState(0);

    // Fetch data from API
    const fetchDataMemoized = useCallback(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const excelData = await response.json();
        setRetriveData(excelData); 
    }, []);

    useEffect(() => {
        fetchDataMemoized();
    }, []);

    // Handle edit mode for a row
    const handleEdit = (rowId) => {
        setEditedRowId(rowId);
        // Set editedRowData with the data of the row being edited
        // You may need to find the row data from retriveData based on rowId
        // Update editedRowData accordingly
    };

    // Handle canceling edit mode
    const handleCancel = () => {
        setEditedRowId(null);
        setEditedRowData({});
    };

    // Handle saving changes
    const handleSave = async () => {
        // Update original data array with modified editedRowData
        // Reset editedRowId and editedRowData
    };

    // Handle cell value change
    const handleInputChange = (key, value) => {
        // Update editedRowData with the new value for the corresponding key
    };

    return (
        <div className="dashboard-container">
            <div>
                {retriveData.length === 0 ? (
                    <div className="no-results">
                        <p>No results found</p>
                    </div>
                ) : (
                    <ExcelGrid
                        retriveData={retriveData}
                        selectedRowIds={selectedRowIds}
                        editedRowId={editedRowId}
                        editedRowData={editedRowData}
                        handleEdit={handleEdit}
                        handleCancel={handleCancel}
                        handleInputChange={handleInputChange}
                        handleSave={handleSave}
                        roleID={roleID}
                        setEditedRowData={setEditedRowData}
                        rowToDelete={rowToDelete}
                        setRowToDelete={setRowToDelete}
                    />
                )}
            </div>
        </div>
    );
}

export default Dashboard;
