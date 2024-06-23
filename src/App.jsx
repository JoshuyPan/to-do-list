import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Input from './components/Input'
import ToDo from './components/ToDo'


function App() {
  
  const [ tasks, setTasks ] = useState([]);
  
  function handleAddTask(task) {
    if(task){
      setTasks(prevTasks => {
        const newArr = [...prevTasks, task];
        return newArr;
      })
    }
  }

  function handleRemoveTask(taskIndex) {
    setTasks( prevTasks => {
      const newArr = [...prevTasks];
      newArr.splice(taskIndex, 1);
      return newArr;
    })
  }
  

  return (
    <>
      <Header />
      <main>
        <Input inputClick={handleAddTask} />
        <ToDo len={tasks.length} removeTask={handleRemoveTask} tasks={tasks} />
      </main>
    </>
  )
}

export default App
