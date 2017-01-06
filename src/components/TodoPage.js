import React from 'react'
import TodoList from './todos/TodoList'

const todos = [{
  id: 1,
  text: 'Study a lot',
  done: false
}, {
  id: 2,
  text: 'Go to the US again',
  done: false
}]

class TodoPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todos }

    this.toggleTodo = this.toggleTodo.bind(this)
  }

  toggleTodo(todo) {
    const newTodos = this.state.todos.map(t => {
      if (todo.id === t.id) {
         return Object.assign({}, t, { done: !todo.done })
      }
      return t
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoPage
