import { v4 as uuidv4 } from 'uuid';
import{useState} from "react";
export default function Todo(){
    let[todos,setTodos]=useState([{task:"sample", id:uuidv4()}]); /*todos trigger add button*/
    let[newTodo,setNewTodo]=useState("");  /*newTodo is the value of the input field*/

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return[...prevTodos,{task:newTodo, id:uuidv4()}];
        })
        setNewTodo(""); /*reset value of placeholder to empty after adding*/
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
        
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id !=id);
        });
    }


    let upperCaseAll=()=>{
        setTodos( (prevTodos)=>
            todos.map((todo)=>{
                return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
        
    };
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
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

            <button onClick={upperCaseAll}>uppercase All</button>
        </div>
    );
}