import React from 'react'

const  Tourcard =(props)=> {
  return (


     <div className="container mt-3">
                         
                         <img  src={props.imageURL} className='img-fluid'></img>
                        <div className="card-body">
                            <p className="h4">
                                {props.heading}
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sint ullam et ratione natus quaerat delectus veniam nisi consequuntur alias perspiciatis ad, libero inventore ipsum velit laboriosam praesentium at odio.</p>
                            <button className='btn btn-success'>+</button>
                        </div>
                    </div>
  )
}

export default Tourcard