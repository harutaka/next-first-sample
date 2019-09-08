import React, { useReducer, useContext } from 'react'
import Head from 'next/head'

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.name]};
    case "remove":
      return { ...state, todos: [...state.todos.slice(0, action.num), ...state.todos.slice(action.num + 1)]};
    case "name":
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const StateContext = React.createContext();
const DispatchContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [], name: "" });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Todo />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const Todo = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (<div>
    <Head>
      <title>Todo</title>
    </Head>

    <input type="text" onInput={e => dispatch({ type: "name", name: e.target.value}) } />
    <button onClick={() => dispatch({ type: "add", name: state.name }) } >登録</button>
    <ul>
      {state.todos.map((todo, index) => <li key={index}>
        {todo}
        <button onClick={() => dispatch({ type: "remove", num: index }) }>削除</button>
      </li>)}
    </ul>

  </div>);
}

export default App