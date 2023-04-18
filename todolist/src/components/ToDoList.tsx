import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";

interface Props {
  toDos: ToDo[];
}

const ToDoList = ({ toDos }: Props) => {
  console.table(toDos);
  return (
    <section>
      {toDos.map((toDo) => (
        <div className="todo__container mb-3">
          <div className="ms-2 mt-1">
            <input type="checkbox"></input>
          </div>

          <div className="d-flex flex-column my-0">
            <p className="mb-0">{toDo.title}</p>
            <p className="fw-light fs-4">{toDo.description}</p>
          </div>

          <div className="">
            <button className="btn">
              <AiOutlineEdit size={20} />
            </button>
          </div>

          <div className="">
            <button className="btn">
              <AiOutlineDelete color="red" size={20} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToDoList;
