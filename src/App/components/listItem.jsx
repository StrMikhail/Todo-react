import React from "react";
const ListItem = ({ action, handleComplete, handleDelete }) => {
    const onCompleteTask = () => {
        handleComplete({value: action.value, completed: !action.completed, id: action.id})
    }
    return (
        <li className={"list-group-item d-flex justify-content-between align-items-start "}>
                <h3 className="bi" onClick={onCompleteTask}>
                    <i className={`bi bi` + (action.completed ? "-check-circle" : "-circle")} />
                </h3>
            <div className="list-text m-2 me-auto">
            <div className={"fw" + (action.completed ? " text-action" : "")}>{action.value}</div>
            <i className="bi bi-trash3 h5 mx-3 delete" onClick={() => handleDelete(action.id)}></i>
            </div>
      </li>
    );
};

export default ListItem;

