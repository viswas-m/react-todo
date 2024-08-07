import './index.css'

import React ,{useState} from 'react'

function TodoList(){

    const [taskList,setTaskList]=useState(["play game","play chess","make a craft"]);

    const [newTask,setNewTask]=useState("");

    function handletaskname(event){
        setNewTask(event.target.value);
    }

    function AddTask(event){
        event.preventDefault();
        if (newTask.trim()!=""){
            setTaskList(e=>[...e,newTask]);
            setNewTask("");
        }
        
    }

    function DeleteTask(index){
        const newList= taskList.filter((e,i)=>i!=index)
        setTaskList(newList)
    }

    function Moveup(index){
     if(index>0){
        const newList=[...taskList];
        [newList[index],newList[index-1]]=[newList[index-1],newList[index]];
        setTaskList(newList);
     }
    }

    function Movedown(index){
        if(index<taskList.length-1){
            const newList=[...taskList];
            [newList[index],newList[index+1]]=[newList[index+1],newList[index]];
            setTaskList(newList);
         }

    }

    return(
        <div className='main-cont'>

            <h1 className='main-text'>ToDo List</h1>
            <form onSubmit={AddTask}>
                <input type='text'
                value={newTask}
                 onChange={handletaskname} 
                 placeholder='Enter the task'
                 className='taskInput'/>
                 <button className='addButton' type='submit'><i class="fi fi-rr-right"></i></button>
                 </form>
            <ul className='tasks-list'>
                {taskList.map((e,i)=>
                <>
                <li className='item-list' key={i}>
                    <p>{i+1}. </p>
                    <p>{e}</p>
                    <div className='button-cont'>
                    <button className='item-button delete-btn' type='button' onClick={()=>DeleteTask(i)}>Delete</button>
                    <button className='item-button up-btn' type='button' onClick={()=>Moveup(i)}><i class="fi fi-br-up"></i></button>
                    <button className='item-button down-btn' type='button' onClick={()=>Movedown(i)}><i class="fi fi-br-down"></i></button>
                    </div>
                </li><hr/></>)}
            </ul>
        </div>

    )
}

export default TodoList
