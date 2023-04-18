import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";

interface Props {
  toDos: ToDo[];
  onDelete: (deletedToDo: ToDo) => void;
  onStrike: (StrikedToDo: ToDo) => void;
  onEdit: (EditedToDo: ToDo) => void;
}

const ToDoList = ({ toDos, onDelete, onStrike, onEdit }: Props) => {
  console.table(toDos);
  return (
    <section>
      {toDos.map((toDo) => (
        <div className="todo__container mb-3">
          <div className="ms-2 mt-1">
            {!toDo.isEdited && (
              <input type="checkbox" onClick={() => onStrike(toDo)}></input>
            )}
          </div>

          <div className="d-flex flex-column my-0">
            <div
              className={
                toDo.isDone
                  ? "text-decoration-line-through"
                  : "text-decoration-none"
              }
            >
              <p className="mb-0">{toDo.title}</p>
              <p className="fw-light fs-4">{toDo.description}</p>
            </div>
          </div>

          <div className="">
            {!toDo.isEdited ? (
              <button className="btn" onClick={() => onEdit(toDo)}>
                <AiOutlineEdit size={20} />
              </button>
            ) : (
              <button className="btn">
                <VscSaveAs size={20} />
              </button>
            )}
          </div>

          <div className="">
            {!toDo.isEdited ? (
              <button className="btn" onClick={() => onDelete(toDo)}>
                <AiOutlineDelete color="red" size={20} />
              </button>
            ) : (
              <button className="btn">
                <MdOutlineCancel size={20} color="red" />
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToDoList;
