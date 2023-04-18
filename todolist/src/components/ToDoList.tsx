import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { useForm, FieldValues } from "react-hook-form";

interface Props {
  toDos: ToDo[];
  onDelete: (deletedToDo: ToDo) => void;
  onStrike: (strikedToDo: ToDo) => void;
  onEdit: (editedToDo: ToDo) => void;
  onCancelEdit: (cancelEditedToDo: ToDo) => void;
  onEditSubmit: (editedtoDo: ToDo, data: FieldValues) => void;
}

const ToDoList = ({
  toDos,
  onDelete,
  onStrike,
  onEdit,
  onCancelEdit,
  onEditSubmit,
}: Props) => {
  console.table(toDos);

  const { register, handleSubmit } = useForm();

  //   const onSubmit = (data: FieldValues) => {
  //     console.log(data);
  //   };

  return (
    <section>
      {toDos.map((toDo) => (
        <div className="todo__container mb-3">
          <div className="ms-2 mt-1">
            {!toDo.isEdited && (
              <input type="checkbox" onClick={() => onStrike(toDo)}></input>
            )}
          </div>

          {!toDo.isEdited ? (
            <>
              <div className="d-flex flex-column my-0">
                <div
                  className={
                    toDo.isDone
                      ? "text-decoration-line-through"
                      : "text-decoration-none"
                  }
                >
                  <p className="fw-bold mb-0">{toDo.title}</p>
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
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit((data) => onEditSubmit(toDo, data))}>
                <div className="d-flex flex-column my-0">
                  <input
                    {...register("title")}
                    type="text"
                    className="fs-4 ps-0  form-control fw-bold mb-0 border-0 shadow-none"
                    defaultValue={toDo.title}
                  />
                  <textarea
                    {...register("description")}
                    className=" fs-4 ps-0 form-control fw-light mb-0 border-0 shadow-none"
                    defaultValue={toDo.description}
                  />
                </div>
                <div className="">
                  {!toDo.isEdited ? (
                    <button className="btn" onClick={() => onEdit(toDo)}>
                      <AiOutlineEdit size={20} />
                    </button>
                  ) : (
                    <button type="submit" className="btn">
                      <VscSaveAs size={20} />
                    </button>
                  )}
                </div>
              </form>
            </>
          )}

          <div className="">
            {!toDo.isEdited ? (
              <button className="btn" onClick={() => onDelete(toDo)}>
                <AiOutlineDelete color="red" size={20} />
              </button>
            ) : (
              <button className="btn" onClick={() => onCancelEdit(toDo)}>
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
