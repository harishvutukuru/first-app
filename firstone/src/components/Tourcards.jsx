import React ,{useState}from 'react' ; 
import img1 from "../assets/images/img1.webp"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.webp"
import Tourcard from './Tourcard' 
const Tourcards = (props) =>{

  const [tourCardobj , settourCardobj]=useState([{id:1001,heading:'London', imageURL:img1},{id:1002,heading:'Paris', imageURL:img2},{id:1003,heading:'Newyork', imageURL:img3}])
  return (
    
        <div className="container mt-3">
            <div className="row">
              {
tourCardobj.map((tourCard,index)=>{
  return(
      <div className="col-sm-3" key={tourCardobj.id}>
      <Tourcard tourCard={tourCard}></Tourcard>
    </div>
  )
 

})
              }
        <Tourcard imageURL={img1} heading={'London'}></Tourcard> 
        <Tourcard imageURL={img2} heading={'Paris'}></Tourcard> 
        <Tourcard imageURL={img3} heading={'Newyork'}></Tourcard> 

               
            </div>
        </div>
    
  )
}

export default Tourcards