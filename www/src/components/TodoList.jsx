import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, setMounted, mounted }) => {
    return (
        <>
            <div className="row container m50">
                {todos.map(todo => <Todo key={todo._id} todo={todo} setTodos={setTodos} setMounted={setMounted} mounted={mounted}/>)}
            </div>
        </>
    )
}

export default TodoList
