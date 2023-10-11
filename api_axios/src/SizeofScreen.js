import React,{useEffect,useState} from 'react'



const SizeofScreen = () => { 
    const [size, setSize] = useState(window.innerWidth) 
    const sizer = () => {
       setSize(window.innerWidth) 
    }   
 useEffect(() => {
     window.addEventListener('resize', sizer)
     
     return () => {
         window.removeEventListener('resize', sizer);
     };
         
      

    });

  return (
      <div>
          <h1>{size}px</h1>
    </div>
  )
}

export default SizeofScreen
