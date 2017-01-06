import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos = [], toggleTodo }) => (
  <div>
    { todos.map(todo => <Todo toggleTodo={toggleTodo} key={todo.id} todo={todo} />) }
  </div>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  toggleTodo: React.PropTypes.func.isRequired
}

export default TodoList
