// Dependencies
import React from "react";
// Pages
import Index from "./pages/Index/Index";
import AddTodo from "./components/AddTodo/AddTodo"
// Styles
import "./tailwind.output.css";

// TODO Endpoint https://jsonplaceholder.typicode.com/todos

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="w-3/4 mx-auto shadow mt-10 px-4 py-4 rounded border border-gray-300 flex">
        <h1 className="font-bold flex-1">Todo List</h1>

      </div>
        <AddTodo />
        <Index />

    </div>
  );
};

export default App;
