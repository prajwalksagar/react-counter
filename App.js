import React, { useState }  from 'react';
import './App.css';
function App(){
const [count, setCount] = useState(0);
const incrementCounter = () =>{
setCount(count + 10);
};
return(
<div className="App">
<header className= "App-header">
<h1>Counter App with button</h1>
<p>Counter value : {count}</p>
<button onClick={incrementCounter}>Increment</button>
</header>
</div>
);
}
export default App;

