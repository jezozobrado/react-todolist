import ToDoList from "./components/ToDoList";

export interface ToDo {
  id: number;
  description: string;
  // due: Date;
}

let data = [
  { id: 1, description: "Wash dishes at pumunta sa palengke putaingina" },
  { id: 2, description: "Go to gym." },
];

const App = () => {
  return (
    <>
      <ToDoList toDoList={data} />
    </>
  );
};

export default App;
