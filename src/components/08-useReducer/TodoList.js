import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, handleDelete, handleToggle}) => {

    return (
        <div className='col-7'>
            <ul className='list-group list-group-flush'>
                {todos.map((todo, i) => (
                    <TodoListItem 
                        todo={todo} 
                        index={i} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {}

export default TodoList