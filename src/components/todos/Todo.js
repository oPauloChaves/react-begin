import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTodo = this.toggleTodo.bind(this)
  }

  toggleTodo() {
    this.props.toggleTodo(this.props.todo)
  }

  render() {
    const { todo } = this.props
    return (
      <div>
        <h3
          onClick={this.toggleTodo}
          style={{ textDecoration: todo.done ? 'line-through': 'none' }}
        >
          {todo.text}
        </h3>
      </div>
    )
  }
}

export default Todo
