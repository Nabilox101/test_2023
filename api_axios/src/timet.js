import React,{useState, useEffect, useRef} from 'react'

function Timet() {

  {/*
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {

        intervalRef.current = setInterval(() => {

            setTimer(prevTimer => prevTimer + 1);
        },1000);
        return () => {
           clearInterval(intervalRef.current)
       }

    }, []);

    return (
      <>
      <div>
            {timer}
           
      </div>
     <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    
      </>
    
    )*
  const countRef = useRef(0);
  //const [value, setValue] = useState(0);
  
   useEffect(() => {
     handleButtonClick = () => {
      countRef.current++;
    };
     
     return () => countRef.current
  }, []);   

  return (
    <div>
      <button onClick={handleButtonClick}>Increment</button>
      <h1 id="value">{countRef.current}</h1>
    </div>
  );*/}
  const [count, setCount] = useState(0);
  const numberRef = useRef(0);
  useEffect(() => {
    //document.title = `You clicked ${count} times`;
    //if(numberRef)
    numberRef.current++;
  }, [count]);
  
    return (
      <div>
        <h1>{numberRef.current}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </button>
        
        </div>
    );


}


export default Timet
