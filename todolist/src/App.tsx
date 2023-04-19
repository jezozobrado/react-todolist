import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { FieldValues } from "react-hook-form";

export interface ToDo {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  isEdited: boolean;
  isHovered: boolean;
}

let data = [
  {
    id: 1,
    title: "WASJ",
    description:
      "Wash dishes at pumunta sa palengke putainginadsaddddddddddddddaaa11 aaaaaaaaaaaaaaaaaa",
    isDone: false,
    isEdited: false,
    isHovered: false,
  },
  {
    id: 2,
    title: "gym",
    description: "Go to gym.",
    isDone: false,
    isEdited: false,
    isHovered: false,
  },
  {
    id: 3,
    title: "code",
    description: "Django, React JS, Welcome to New york.",
    isDone: false,
    isEdited: false,
    isHovered: false,
  },
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

  const handleEdit = (editedToDo: ToDo) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.description === editedToDo.description
          ? { ...toDo, isEdited: !toDo.isEdited }
          : toDo
      )
    );
  };

  const handleHover = (hoveredToDo: ToDo) => {
    // console.log("Hovered!");

    setToDos(
      toDos.map((toDo) =>
        toDo.description === hoveredToDo.description
          ? { ...toDo, isHovered: !toDo.isHovered }
          : toDo
      )
    );
  };

  // const handleSave = (savedToDo: ToDo) => {
  //   setToDos(
  //     toDos.map((toDo) =>
  //       toDo.description === savedToDo.description
  //         ? { ...toDo, isEdited: !toDo.isEdited }
  //         : toDo
  //     )
  //   );
  // };

  const handleCancelEdit = (cancelEditedToDo: ToDo) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.description === cancelEditedToDo.description
          ? { ...toDo, isEdited: !toDo.isEdited }
          : toDo
      )
    );
  };

  const handleSave = (savedToDo: ToDo, data: FieldValues) => {
    console.log(savedToDo, data);
    setToDos(
      toDos.map((toDo) =>
        toDo.description === savedToDo.description
          ? { ...toDo, isEdited: !toDo.isEdited }
          : toDo
      )
    );
  };

  return (
    <>
      <ToDoList
        toDos={toDos}
        onDelete={handleDelete}
        onStrike={handleStrike}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
        onSave={handleSave}
      />
    </>
  );
};

export default App;
