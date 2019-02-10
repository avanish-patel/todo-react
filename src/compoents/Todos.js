import React from 'react';

const Todos = (props) => {

    const todos = props.todos.length > 0 ? (
        props.todos.map( todo => {
            return(
                <div className="todo collection-item" key={todo.id}>
                    <div className="todo-content">
                        <p>{todo.content}</p>
                        <button onClick={() => {props.deleteTodo(todo.id)}}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            );
        })
    ) : <div> <p className="center">You have nothing left in your Todo.</p></div>;


    return(
        <div className="todos collection">
            {todos}
        </div>
    );

}

export default Todos;