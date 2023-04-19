import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrAdd } from "react-icons/gr";

const ToDoForm = () => {
  const [isLogging, setIsLogging] = useState(false);

  const { register, handleSubmit } = useForm();
  return (
    <>
      {!isLogging ? (
        <button className="btn" onClick={() => setIsLogging(!isLogging)}>
          <GrAdd size={15} />
        </button>
      ) : (
        <>
          <div className="mb-5 border p-3 rounded-4">
            <form>
              <input
                {...register("title")}
                id="todo-title"
                type="text"
                className="form-control border-0 shadow-none fs-3 fw-bold"
                placeholder="Title"
              />
              <input
                {...register("description")}
                id="todo-description"
                type="text"
                className="form-control border-0 shadow-none fs-4 fw-light"
                placeholder="Description"
              />
            </form>
            <div className="d-flex justify-content-end border-top pt-3">
              <button
                className="btn btn-secondary fs-4 py-2 px-3"
                onClick={() => setIsLogging(!isLogging)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary fs-4 py-2 px-3 ms-2"
              >
                Add
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ToDoForm;
