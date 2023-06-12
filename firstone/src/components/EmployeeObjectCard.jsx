import React,{useState} from 'react'

const EmployeeObjectCard =(props)=> {
   const {employee}=props;  
  return (
    <>
    <div className="card mt-3">
<div className="card-header">
    <p className="h3">
      Employees Details
    </p>
</div>
<div className="card-body">
<li className='list-group-item'> 
id:{employee.id} 
    </li>
    <li className='list-group-item'> 
      Name:{employee.name}
    </li>
    <li className='list-group-item'> 
    Age:{employee.age}
    </li>
    <li className='list-group-item'> 
    Designation:{employee.Designation}
    </li>
</div>

    </div>
    </>
  )
}

export default EmployeeObjectCard