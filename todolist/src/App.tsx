import { useState } from "react";
import ToDoList from "./components/ToDoList";

export interface ToDo {
  id: number;
  description: string;
  isDone: boolean;
  // due: Date;
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

  return (
    <>
      <ToDoList
        toDoList={toDos}
        onDelete={(deletedToDo) =>
          setToDos(
            toDos.map((toDo) =>
              toDo.description === deletedToDo.description
                ? { ...toDo, isDone: !toDo.isDone }
                : toDo
            )
          )
        }
      />
    </>
  );
};

export default App;
