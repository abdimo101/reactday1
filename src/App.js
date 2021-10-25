import logo from './logo.svg';
import './App.css';
import obj from './file2';
import { males } from './file2';
import { females } from './file2';


//function Persons(props){
 // const {males, females} = props;
  //return <p>{males}, {females}</p>
  //}

function App() {
const person = obj;
const personMale = males;
const personFemale = females;
const {firstName, email} = person;

const maleArr = personMale[0] + ", " + personMale[1];
const femaleArr = personFemale[0] + ", " + personFemale[1];
const bothGendersArr = maleArr + ", "+femaleArr;
console.log(bothGendersArr)
  return(
  <div className="App">  
  <h2>Ex 2</h2>
  <p>{firstName}</p>
  <p>{email}</p> 
  <p>{bothGendersArr}</p>
  </div>
    );
}

export default App;
