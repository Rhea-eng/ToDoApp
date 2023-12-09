import {  useRef } from "react";
import { BiSolidBookAdd } from "react-icons/bi";

function AppTodo({onNewItem}) {
  const todoNameElement= useRef();
  const dueDateElement=useRef();

  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit= 
      {handleAddButtonClicked}>
        <div className="col-6">
          <input type="text"
          ref={todoNameElement}
           placeholder="Enter TODO here" 
        
           />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}
            />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiSolidBookAdd/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppTodo;
