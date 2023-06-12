import React,{useState} from 'react'

const Employeecard =()=> {
    const[employeeName , SetEmployeeName]=useState("Harish");
    const[employeeAge , SetEmployeeAge]=useState(30);
    const[employeeDesignation , SetEmployeeDesignation]=useState("DOt NET Developer");

  return (
    <>
    <div className="card mt-3">
<div className="card-header">
    <p className="h3">
      Employee Details
    </p>
</div>
<div className="card-body">
    <li className='list-group-item'> 
      Name:{employeeName}
    </li>
    <li className='list-group-item'> 
    Age:{employeeAge}
    </li>
    <li className='list-group-item'> 
    Designation:{employeeDesignation}
    </li>
</div>

    </div>
    </>
  )
}

export default Employeecard