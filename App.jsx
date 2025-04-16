import './App.css';
import {useState} from 'react';

function Button({text, onClick}){
  
  return(
      <button className="button" onClick={onClick} >{text}</button>
  );
}

function App() {
 const [count, setCount] = useState(0);
 const [message, setMessage] = useState('');   // message to show errors or limit notices

 
 //Event handler for the decrement function 
 function decrement(){
   if (count <= 0) {
      setMessage("Can't go below 00"); // Show message if limit reached
    } else {
      setCount(count - 1);               // decrease the count
    }
  };
  
  //Event handler for the increasing function
  function increment(){
    if (count >= 1000) {
      setMessage("Can't go above 1000"); // Show message if limit reached
    } else {
      setCount(count + 1);               // Increase the count
    }
  };
  
  return (
    <>
      <h1>Click Counter App</h1>
      <div className = "container">
        <h2> {count} </h2>
      </div>
       {/* Display message only if it's not empty */}
      {message && <p>{message}</p>}
      <Button text = "Add up" onClick = {increment} />
      <Button text = "Subtract" onClick = {decrement} />
    </>
  )
}

export default App
