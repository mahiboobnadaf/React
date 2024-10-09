import { useEffect, useState } from "react";

function App() {
  const [count,setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  let id;
  const start = () =>{
    setIsClicked(true);
  }   
  
  const stop = () =>{
    setCount(count)
    setIsClicked(false)
  }

  const reset = () =>{
    setCount(0)
    setIsClicked(false)
  }

  useEffect(()=>{ 
    id = setInterval(()=>{
      if(isClicked){
        setCount(count=>count+1)
    }},1000);
  
    return ()=>clearInterval(id);
  },[start]);

  return (
    <>
      <div>
        <h1 style={{display:"flex",color:"green"}}> My-Counter</h1>
        <h1 > {count} </h1>
        <button onClick={start} > Start/Resume </button>
        <button onClick={stop} > Stop </button>
        <button onClick={reset}>  Reset </button>

      </div>
    </>
   
  );

}
export default App;
