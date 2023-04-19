import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GrAdd } from "react-icons/gr";
import { ToDo } from "../App";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().min(1, { message: "Description is required." }),
});

type ToDoData = z.infer<typeof schema>;

interface Props {
  toDos: ToDo[];
  setToDos: (toDos: ToDo[]) => void;
}

const ToDoForm = ({ toDos, setToDos }: Props) => {
  const [isLogging, setIsLogging] = useState(false);
  const [data, setData] = useState({ title: "", description: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ToDoData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setToDos([
      ...toDos,
      {
        id: toDos.length + 1,
        title: data.title,
        description: data.description,
        isDone: false,
        isEdited: false,
        isHovered: false,
      },
    ]);
    setIsLogging(!isLogging);

    reset({ title: "", description: "" });
  };

  return (
    <>
      {!isLogging ? (
        <button className="btn" onClick={() => setIsLogging(!isLogging)}>
          <GrAdd size={15} />
        </button>
      ) : (
        <>
          <div className="mb-5 border p-3 rounded-4">
            <form id="addForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title")}
                id="todo-title"
                type="text"
                className="form-control border-0 shadow-none fs-3 fw-bold"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              {errors.title && (
                <p className="text-danger ms-2">{errors.title.message}</p>
              )}
              <input
                {...register("description")}
                id="todo-description"
                type="text"
                className="form-control border-0 shadow-none fs-4 fw-light"
                placeholder="Description"
              />
              {errors.description && (
                <p className="text-danger ms-2">{errors.description.message}</p>
              )}
            </form>
            <div className="d-flex justify-content-end border-top pt-3">
              <button
                className="btn btn-secondary fs-4 py-2 px-3"
                onClick={() => {
                  setIsLogging(!isLogging);
                  reset({ title: "", description: "" });
                }}
              >
                Cancel
              </button>
              <button
                disabled={!isValid}
                form="addForm"
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
