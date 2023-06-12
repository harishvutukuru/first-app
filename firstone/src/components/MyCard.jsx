import React from 'react'

const MyCard =(props)=> {
  return (
    <>
    <div className='card'> 
    <div className='card-header'><p className={`h3 ${props.color}`}>Good Morning</p></div>
        
        <div className="card-body">
        <p  >
        {props.heading}
            </p>
            <p>
                {/* {props.children} */}
            </p>
        </div>
         
    </div>
    </>
  )
}

export default MyCard