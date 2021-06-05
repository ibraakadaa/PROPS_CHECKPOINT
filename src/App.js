import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'





function App() {

var fullName="Ibrahim Sahli"
var bio="learning from mistake"
var profession="Web Developper"

function handelName(str){
  alert(`Full name: ${str}`) 
}
  return (
    <div >
    <Profile fullName={fullName} bio={bio} profession={profession} handelName={handelName}>
    <img  style={{ height:"280px ",width:"20%",borderRadius:"50%"}} src=  "./ib.jpg "  />

    </Profile>
     
    </div>
  );
}

export default App;
