import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDelete = (ids) => {
    const newData = data.filter((item) => !ids.includes(item.id));
    setData(newData);
  };

  const handleSelectionChange = (ids) => {
    setSelectedIds(ids);
    if (ids.length > 0) {
      const selectedRows = ids.map((id) => data.find((row) => row.id === id));

      setSelectedRow(selectedRows);
    } else {
      setSelectedRow([]);
    }
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
      />
      <div className="action-wrapper">
        {selectedRow?.length > 0 && (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(selectedIds)}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Datatable;
