import { MdFolderDelete } from "react-icons/md";


function TodoItem1 ({todoName, todoDate, onDeleteClick }) {

  // let todoName="Buy Milk";
  // let todoDate="4/12/2023";

  return (
    <div className="container text-center">
    <div className="row kg-row">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">{todoDate}
    </div>
    <div className="col-2"> 
    <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoName)}>
    <MdFolderDelete />
    </button>

  </div>
  </div>
  </div>
  );

  }
export default TodoItem1; 