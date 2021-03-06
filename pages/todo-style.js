import React, { useState } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  
  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (<div>
    <Head>
      <title>Todo</title>
    </Head>

    <input type="text" onInput={e => setName(e.target.value)} />
    <button onClick={() => setTodos([...todos, name])} >登録</button>
    <ul>
      {todos.map((todo, index) => <li key={index}>
        {todo}
        <button onClick={() => { removeTodo(index) }}>削除</button>
      </li>)}
    </ul>

    <style jsx>{liStyles}</style>

  </div>);
}

const liStyles = css`
  li {
    font-size: 48px;
  }
`;


export default Todo