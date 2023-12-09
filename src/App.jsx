import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

const [todoItems, setTodoItems]= useState( [] );

const handleNewItem=(itemName, itemDueDate) => {
  
  setTodoItems((currValue) => [
      ...currValue, 
      {name: itemName, dueDate: itemDueDate},
  ]);
};

const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter(item => item.name !==todoItemName);
  setTodoItems(newTodoItems);
  console.log(`Item Deleted:${todoItemName}`);
}
  
    return (
      <div className="todo-container">
      <AppName/>
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
     </div>
  
    );
}

export default App
