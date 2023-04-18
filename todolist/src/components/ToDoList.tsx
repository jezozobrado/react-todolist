import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { useForm, FieldValues } from "react-hook-form";

interface Props {
  toDoList: ToDo[];
  onStrike: (strikedToDo: ToDo) => void;
  onDelete: (deletedToDo: ToDo) => void;
  onHover: (hoveredToDo: ToDo) => void;
  onEdit: (editedToDo: ToDo) => void;
  onSave: (savedToDo: ToDo) => void;
}

const ToDoList = ({
  toDoList,
  onStrike,
  onDelete,
  onHover,
  onEdit,
  onSave,
}: Props) => {
  const { register, handleSubmit } = useForm();

  //   const onSubmit = (data: FieldValues) => {
  //     console.log(data);
  //   };
  return (
    <>
      <ul className="list-group m-3 todolist__container">
        {toDoList.map((toDo) => (
          <div key={toDo.id}>
            <li className="list-group-item py-1 mb-2 ">
              <div
                className="d-flex justify-content-between"
                onMouseEnter={() => onHover(toDo)}
                onMouseLeave={() => onHover(toDo)}
              >
                <div className="d-flex justify-content-between align-items-baseline">
                  {!toDo.isEdited && (
                    <input
                      type="checkbox"
                      className="me-2"
                      onClick={() => onStrike(toDo)}
                    />
                  )}
                  {toDo.isEdited ? (
                    <div className="d-flex flex-column flex-grow-1">
                      <input
                        {...register("title")}
                        type="text"
                        defaultValue={toDo.title}
                        className="form-control border-0 shadow-none"
                      />
                      <input
                        {...register("description")}
                        type="text"
                        defaultValue={toDo.description}
                        className="form-control border-0 shadow-none"
                      />
                    </div>
                  ) : (
                    <div
                      className={
                        toDo.isDone
                          ? "text-decoration-line-through"
                          : "text-decoration-none"
                      }
                    >
                      <div className="fw-bold">{toDo.title}</div>
                      {toDo.description}
                    </div>
                  )}
                </div>

                <div className="d-flex p-0 align-items-start">
                  <button
                    className="btn border-0 p-0"
                    onClick={() => {
                      toDo.isEdited ? onSave(toDo) : onEdit(toDo);
                    }}
                  >
                    {toDo.isEdited ? <VscSaveAs /> : <AiOutlineEdit />}
                  </button>

                  <button
                    className="btn border-0 py-0"
                    onClick={() => onDelete(toDo)}
                  >
                    {toDo.isEdited ? (
                      <MdOutlineCancel color="red" />
                    ) : (
                      <AiOutlineDelete color="red" />
                    )}
                  </button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
