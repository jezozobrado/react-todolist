import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface Props {
  toDoList: ToDo[];
}

const ToDoList = ({ toDoList }: Props) => {
  return (
    <>
      <ul className="list-group m-3">
        {toDoList.map((toDo) => (
          <li key={toDo.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <input type="checkbox" className="me-2" />
                {toDo.description}
              </div>
              <div className="d-flex ps-5 align-items-center">
                <div className="me-1">
                  <AiOutlineEdit />
                </div>
                <div className="ms-1">
                  <AiOutlineDelete />
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
