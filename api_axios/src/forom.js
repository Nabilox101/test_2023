import React,{useState} from 'react'

function Forom() {
    const [name, setName] = useState('');
    const [students, setStudents] = useState([]);

    const handlenames = (e) => {
        
        setStudents([...students, name])
        setName('')
    }
    
    const boys = students.map((boy, index) => (
        <h1 key={index}>{boy}</h1>
    ));

       //const boysArray = students.map((boy) => `name: ${boy}`);

      //console.log([boysArray]);



  return (
    <div>
        <label>
              Name: <input value={name} onChange={(e) => setName(e.target.value)} />
              <button onClick={handlenames}>Add name </button>
          </label>
          <div>{boys}</div>
    </div>
  )
}

export default Forom
