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
    <div className='flex items-center flex-col'>
          <h1> {name} from {props.country} </h1>
          <h2> {name2} from {props.country} </h2>

      <button className=' bg-black text-pink-500' onClick={changeName}> Change </button>


    </div>
    
    

    </>);
}

export default App;
