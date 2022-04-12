import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { todoReducer } from './todoReducer'

import './styles.css'
import { isCompositeComponent } from 'react-dom/test-utils'
import { useForm } from '../../hooks/useForm'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    
    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId,
        }

        dispatch(action);
    }

    const handleAddTodo = ( newTodo ) => {
        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action );
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className='row'>
                <TodoList 
                    todos={ todos }
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle }
                />
                <TodoAdd 
                    handleAddTodo={ handleAddTodo }
                />
            </div>
        </div>
    )
}

TodoApp.propTypes = {}

export default TodoApp