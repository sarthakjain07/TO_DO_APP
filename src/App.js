import React, {useState} from 'react'; 
import './App.css';

function App() {
  // This function app is returning HTML but it is a special JSX(js+html) html i.e. we can write js in this html
  const [todos, setTodos]=useState(['Do Workout','Do Meditation']);
  const [input, setInput]=useState('');
  console.log(input);

  const addTodo = (event) => {
    // this will work when we press the button add to do
    console.log("Working")
    setTodos([...todos, input]);//...todos is a spread to append in the array
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>//todos is array and todo is item in array
        ))}
      </ul>

    </div>
  );
}

export default App;
