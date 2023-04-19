import { ToDo } from "../App";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { useForm, FieldValues } from "react-hook-form";
import { useState } from "react";

interface Props {
  toDos: ToDo[];
  onDelete: (deletedToDo: ToDo) => void;
  onStrike: (strikedToDo: ToDo) => void;
  onEdit: (editedToDo: ToDo) => void;
  onCancelEdit: (cancelEditedToDo: ToDo) => void;
  onSave: (savedtoDo: ToDo, data: any) => void;
}

const ToDoList = ({
  toDos,
  onDelete,
  onStrike,
  onEdit,
  onCancelEdit,
  onSave,
}: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (savedToDo: ToDo, data: FieldValues) => {
    console.log(savedToDo, data);
  };

  return (
    <section>
      {toDos.map((toDo) => (
        <div key={toDo.id} className="todo__container mb-3">
          <div className="ms-2 mt-1">
            {!toDo.isEdited && (
              <input type="checkbox" onClick={() => onStrike(toDo)}></input>
            )}
          </div>

          {!toDo.isEdited ? (
            <>
              <div
                className={
                  toDo.isDone
                    ? "d-flex flex-column my-0 text-decoration-line-through"
                    : "d-flex flex-column my-0 text-decoration-none"
                }
              >
                <p className="fw-bold mb-0">{toDo.title}</p>
                <p className="fw-light fs-4">{toDo.description}</p>
              </div>

              <button
                className="btn align-self-start"
                onClick={() => onEdit(toDo)}
              >
                <AiOutlineEdit size={20} />
              </button>
              <button
                className="btn align-self-start"
                onClick={() => onDelete(toDo)}
              >
                <AiOutlineDelete color="red" size={20} />
              </button>
            </>
          ) : (
            <>
              <form
                id="editForm"
                onSubmit={handleSubmit((data) => onSubmit(toDo, data))}
              >
                <div className="d-flex flex-column my-0">
                  <input
                    {...register("title")}
                    type="text"
                    className="fs-4 ps-0  form-control fw-bold mb-0 border-0 shadow-none"
                  />
                  <textarea
                    {...register("description")}
                    className=" fs-4 ps-0 form-control fw-light mb-0 border-0 shadow-none"
                    //   defaultValue={toDo.description}
                  />
                </div>
              </form>

              <button
                form="editForm"
                type="submit"
                className="btn align-self-start"
              >
                <VscSaveAs size={20} />
              </button>
              <button
                className="btn align-self-start"
                onClick={() => onCancelEdit(toDo)}
              >
                <MdOutlineCancel size={20} color="red" />
              </button>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default ToDoList;
