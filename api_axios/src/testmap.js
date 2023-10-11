import React from 'react'
const people = [
    { id:1,name: 'younes', age: '30' },
    { id:2,name: 'nabil', age: '25' },
    { id:3,name: 'Said', age: '23' },
]

const testmap = () => {
    
    const employees = people.map((employee) => (
        <div key={employee.id}>
            <h1>{'Name :'} {employee.name.toLowerCase()}</h1>
            <h2>{'Age :'}  {employee.age *2}</h2>
        </div>
    )
    );
  return (
    <div>
           {employees}
    </div>
  )
}

export default testmap
