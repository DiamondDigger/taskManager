import React from "react";
import "../styles/ListOfTasks/tableStyles.css";

const TableHeader = () => {
  const headerElems = [
    "admin",
    "id",
    "username",
    "email",
    "text",
    "status",
    "operation",
  ];

  return headerElems.map((key, index) => {
    return <th key={index}>{key.toLowerCase()}</th>;
  });
};

export default TableHeader;
