
import './App.css';
import Grretmessages  from './components/Grretmessages';
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './components/Sample';
import Tourcards from './components/Tourcards';
import Employeecard from './components/Employeecard';
import img1 from "../src/assets/images/img1.webp";
import img2 from "../src/assets/images/img2.png";
import img3 from "../src/assets/images/img1.webp";
import EmployeeObjeCtcard from './components/EmployeeObjectCard';
import EmployeeList from './components/EmployeeList'

function App() {
  return (
    <div className="App">
      <p style={{backgroundColor:'blue'}}>App Component</p>
      <Navbar heading='Props Concept'></Navbar>
      <div style={{display:'flex'}}>
      
       {/* <Employeecard></Employeecard> */}

       <EmployeeList></EmployeeList>
      {/* <Tourcards></Tourcards> */}
      
      </div>
     
    
       {/* <MyCard heading={"hello world"} color={"bg-warning"}>My card has children and we are showiung it in mycard component</MyCard> */}
    </div>
  
  );
}

export default App;
