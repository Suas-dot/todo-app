import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(['Desayunar', 'Tender la cama', 'Ducharse']);
    const [newTask, setNewTask] = useState('');
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !==''){
            setTasks(t=>[...t,newTask])
            setNewTask('');
        }
    }
    function deleteTask(index){
        const newerTasks =tasks.filter((_, i)=> i!== index);
        setTasks(newerTasks);
    }
    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input 
                type="text"
                placeholder="Ingrese una tarea..." 
                value={newTask}
                onChange={handleInputChange}
                />
                <button className="add-button"
                onClick={addTask}>
                    +
                </button>
            </div>

            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                        onClick={()=>deleteTask(index)}>
                            <img src="../items/1017530.png" alt="basurero" />
                        </button>
                    </li>
                )}
            </ol>

        </div>
        
    );
}
export default ToDoList;
