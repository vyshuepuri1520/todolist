import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodosList = ({todos,setTodos,setEditTodo}) =>{
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item,completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    };
    return(
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key = {todo.id}>
                    <input type = "text" value = {todo.title} className="list"
                     onChange={(event)=> event.preventDefault()}/>
                     <div>
                        {/* <button >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button >
                            <i className="fa fa-trash"></i>
                        </button> */}
                        <FontAwesomeIcon icon={faCheckCircle} className = "button-complete task-button" onClick={()=>handleComplete(todo)}/> 
                        <FontAwesomeIcon icon={faEdit} className = "button-edit task-button" onClick={()=>handleEdit(todo)}/>
                        <FontAwesomeIcon icon={faTrash} className = "button-delete task-button" onClick={()=>handleDelete(todo)}/>
                     </div>
                </li>
            ))}
        </div>
    )    
}
export default TodosList;