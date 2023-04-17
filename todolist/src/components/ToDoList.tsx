import { useEffect, useState } from "react";
import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface Props {
  toDoList: ToDo[];
  onStrike: (strikedToDo: ToDo) => void;
  onDelete: (deletedToDo: ToDo) => void;
}

const ToDoList = ({ toDoList, onStrike, onDelete }: Props) => {
  //   console.log(toDoList[0].isDeleted);

  return (
    <>
      <ul className="list-group m-3">
        {toDoList.map((toDo) => (
          <li key={toDo.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <input
                  type="checkbox"
                  className="me-2"
                  onClick={() => onStrike(toDo)}
                />

                <div
                  className={
                    toDo.isDone === true
                      ? "text-decoration-line-through"
                      : "text-decoration-none"
                  }
                >
                  {toDo.description}
                </div>
              </div>
              <div className="d-flex ps-5 align-items-center">
                <div className="me-1">
                  <button
                    className="btn border-0"
                    onClick={() => console.log("Edited.")}
                  >
                    <AiOutlineEdit />
                  </button>
                </div>
                <div className="">
                  <button
                    className="btn border-0"
                    onClick={() => onDelete(toDo)}
                  >
                    <AiOutlineDelete color="red" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
