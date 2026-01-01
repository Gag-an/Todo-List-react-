import{useState} from "react";
export default function Todo(){
    let[todos,setTodos]=useState(["sample"]); /*todos trigger add button*/
    let[newTodo,setNewTodo]=useState("");  /*newTodo is the value of the input field*/

    let addNewTask=()=>{
        setTodos([...todos,newTodo]);
        setNewTodo(""); /*reset value of placeholder to empty after adding*/
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
        
    }
    return(
        <div>
            <h1>ToDO List</h1>
            <input placeholder="add Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <br></br>

            <h4>Task List</h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}