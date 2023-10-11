import React,{useState} from 'react'

const DoorState = () => {
    
    const [value, setValue] = useState('door opened');
    const [state, setState] = useState('close door');
    const [image, setImage] = useState("https://content.presentermedia.com/files/clipart/00017000/17850/door_open_800_wht.jpg");
    const door = () => {
        if (value === 'door opened')
        {
            setValue('door closed');
            setState('open door');
            setImage("https://content.presentermedia.com/files/clipart/00017000/17849/door_closed_800_wht.jpg");
            }
            
        else {
           setValue('door opened');
            setState('close door');
            setImage("https://content.presentermedia.com/files/clipart/00017000/17850/door_open_800_wht.jpg");
          }
           
    };
  
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={door}>{state}</button> 
            <div>
                <img src={image} alt=''/>
            </div>
        </div>

    )
};
export default DoorState;