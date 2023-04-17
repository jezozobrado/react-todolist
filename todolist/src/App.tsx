import { useState } from "react";
import ToDoList from "./components/ToDoList";

export interface ToDo {
  id: number;
  description: string;
  isDone: boolean;
}

let data = [
  {
    id: 1,
    description: "Wash dishes at pumunta sa palengke putaingina",
    isDone: false,
  },
  { id: 2, description: "Go to gym.", isDone: false },
];

const App = () => {
  const [toDos, setToDos] = useState(data);

  const handleStrike = (strikedToDo: ToDo) =>
    setToDos(
      toDos.map((toDo) =>
        toDo.description === strikedToDo.description
          ? { ...toDo, isDone: !toDo.isDone }
          : toDo
      )
    );

  const handleDelete = (deletedToDo: ToDo) =>
    setToDos(
      toDos.filter((toDo) => toDo.description !== deletedToDo.description)
    );

  return (
    <>
      <ToDoList
        toDoList={toDos}
        onStrike={handleStrike}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
