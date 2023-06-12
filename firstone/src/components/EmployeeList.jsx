import React,{useState} from 'react'
import EmployeeObjeCtcard from './EmployeeObjectCard'
const EmployeeList=() =>{

    const [employees , SetEmployees]=useState([{id:1001,name:'Harish Vutukuru',age:30,Designation:'Dot Net Developer'},{id:1002,name:'Parthiv Vutukuru',Age:30,Designation:'java Deveoper'},{id:1003,name:'Sai Abhinav Vutukuru',age:36,Designation:'Senior DotNEt Developer'}])
  return (
   <>
   <div className="container mt-3">
    <div className="row">
        {
    employees.map((employee,index)=>{
        return(
            <div className="col-sm-3" key={employee.id}>
            <EmployeeObjeCtcard employee={employee}></EmployeeObjeCtcard>
          </div>
        )
       

    })
}
        </div>
   </div>
   </>
  )
}

export default EmployeeList