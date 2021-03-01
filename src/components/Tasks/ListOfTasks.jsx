import React from "react";
import data from "../../data.json";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import "../styles/ListOfTasks/tableStyles.css";

const ListOfTasks = () => {
  return (
    <div id="taskData">
      <h1>List of tasks:</h1>
      <table id="taskData">
        <thead>
          <tr id="row">
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <TableData data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default ListOfTasks;
