import React from "react";
import ListItem from "./listItem";

const TodoList = ({ actions, handleComplete, handleDelete }) => {



    return (
        <div className="todo-list-items">
            <div className="create-todo"></div>
            {actions.length != 0 ? (
                <ol className="list-group list-group">
                    {actions.map(action => <ListItem 
                        key={action.id} 
                        action={action} 
                        handleComplete={handleComplete}
                        handleDelete = {handleDelete}
                        />)}
                </ol>) : (
                    <h4>Список пуст</h4>
                )}
            
        </div>
    );
};

export default TodoList;