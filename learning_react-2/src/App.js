import {useState} from 'react';
import './App.css';

function App(props) {

  const [name,setName] = useState('Mahiboob');
  let name2 = "Rasool";

  function changeName(){
    setName("Nadaf");
    name2= "Nadaf 2"
  }

  return (<>
    <div>
          <h1> {name} from {props.country} </h1>
    </div>
    <div> 
          <h2> {name2} from {props.country} </h2>
    </div>
    
      <button className=' bg-black text-pink-500' onClick={changeName}> Change </button>

    </>);
}

export default App;
