import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import data from "../data.json";

const columns = [
  { field: "id", headerName: "ID", sortable: false, width: 70 },
  {
    field: "username",
    headerName: "username",
    sortable: true,
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: true,
    width: 160,
  },
  {
    field: "text",
    headerName: "Text",
    sortable: false,
    width: 160,
  },
  {
    field: "status",
    headerName: "status",
    sortable: true,
    width: 160,
  },
];

export default function FullUserTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data.message.tasks}
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}
