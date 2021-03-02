import React from "react";
import "../styles/ListOfTasks/tableStyles.css";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TableData = ({ data }) => {
  return (
    data.message.tasks &&
    data.message.tasks.map(({ id, username, email, text, status }, index) => {
      return (
        <tr id="row" key={index}>
          <td>
            <button
              className="button-done"
              onClick={() => console.log("completed button")}
            >
              <AiOutlineFileDone />
            </button>
          </td>
          <td>{id}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{text}</td>
          <td>{status}</td>
          <td>
            <button
              className="button-edit"
              onClick={() => console.log("edit button")}
            >
              <FiEdit />
            </button>
            <button
              className="button-delete"
              onClick={() => console.log("delete button")}
            >
              <RiDeleteBin2Fill />
            </button>
          </td>
        </tr>
      );
    })
  );
};

export default TableData;
