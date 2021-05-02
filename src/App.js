import React, {useState, useEffect} from 'react'; 
import Todo from './Todo'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase'
import firebase from 'firebase'
import CreateIcon from '@material-ui/icons/Create';

function App() {
  // This function app is returning HTML but it is a special JSX(js+html) html i.e. we can write js in this html
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');
  console.log(input);

  // when the app loads, we need to listen the database and fetch new todos as they get added or removed
  useEffect(()=>{
    // this will activate when we click the button
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id: doc.id ,todo: doc.data().todo})))//IT will return the flat array from the database in real time
    })
  }, []);

  const addTodo = (event) => {
    // this will work when we press the button add to do
    event.preventDefault(); // It will stop the page from reloading
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })

    setTodos([...todos, input]);//...todos is a spread to append in the array
    setInput('');//for clearing the input everytime when we sunmit it
  }

  return (
    <div className="App">
      <h1>Your Personal TODO List <CreateIcon/ > 
      </h1>
      {/* we are using form to update the to do list by pressing enter button */}
      <form>
        {/* Added style to input section using material ui */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl> 
        {/* Added style to Add Todo button using material ui */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          /* todos is array and todo is item in array */
        ))}
      </ul>

    </div>
  );
}

export default App;
