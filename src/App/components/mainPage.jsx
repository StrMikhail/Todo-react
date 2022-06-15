import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css"
import TodoList from "./todoList";
const MainPage = () => {
    const [text, setText] = useState("");
    const [actions, setActions] = useState([]);
    const [sortedActions, setSortedActions] = useState([]);
    useEffect(() => {
        setSortedActions([...actions])
    },[actions])
    const handleChangeText = ({target}) => {
        setText(target.value)
    }
    const handleComplete = (action) => {
        setActions(prev => prev.map(n => n.id === action.id ? action : n))
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        if (text.trim().length != 0){
            setActions(prev => [...prev, {value: text, completed: false, id: (Date.now())}])
            setText("")    
        }
    }
    const handleDelete = (id) => {
        setActions(actions.filter(i => i.id !== id))
    }
    const onChangeActions = (e) => {
        if (e.target.name === "all"){
            setSortedActions([...actions])
        } else if(e.target.name === "true") {
            setSortedActions(actions.filter(i => i.completed === true ? i : null))
        } else {
            setSortedActions(actions.filter(i => i.completed === true ? null : i))
        }
    }
    return (
        <div className="container main">
        <div className="row">
          <div className="card-title col-9"><h1>TODO LIST</h1></div>
          <div className="col-9 btn-group mb-4" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" name="all" onClick={(e) => onChangeActions(e)}>
                    {`Всe`}
                    <span className="badge bg-primary rounded-pill mx-2" name="all">
                        {actions.length}
                    </span>
                </button>
                <button type="button" className="btn btn-outline-primary" name="false" onClick={(e) => onChangeActions(e)}>
                    {`Предстоящие `} 
                    <span className="badge bg-primary rounded-pill mx-2" name="false" >
                        {actions.filter(i => i.completed === false).length}
                    </span>
                </button>
                <button type="button" className="btn btn-outline-primary" name="true" onClick={(e) => onChangeActions(e)}>
                    {`Выполненные `}
                    <span className="badge bg-primary rounded-pill mx-2" name="false">
                        {actions.filter(i => i.completed === true).length}
                    </span>
                </button>
            </div>
            <div className="input-group mb-3 addTask">
                <form 
                    className="form-addTask col-9" 
                    action="submit"
                    onSubmit={e => handleAddTask(e)}
                    >
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Запишите новое задание..."
                        value={text}
                        onChange={(e) => handleChangeText(e)}    
                    />
                </form>
            </div>
          <div className="todo-list col-9">
                <TodoList actions={sortedActions} handleComplete={handleComplete} handleDelete={handleDelete}/>
          </div>
        </div>
      </div>
    );
};

export default MainPage;