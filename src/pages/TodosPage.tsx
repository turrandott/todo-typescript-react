import React, { useState, useEffect }  from 'react'
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {

    //const [todos, setTodos] = useState<Array<ITodo>>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    //setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    const newArray= todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newArray)
  }

  const removeHandler = (id: number) => {
    //const shouldRemove = window.confirm('Delete the todo?')
    const shouldRemove = confirm('Delete the todo?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

    return (
        <>
            <TodoForm onAdd={addHandler}/>

            <TodoList 
                todos={todos} 
                onToggle={toggleHandler} 
                onRemove={removeHandler}
            />
        </>
    )
}