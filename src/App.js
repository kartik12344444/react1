
import './App.css';
import {Component} from 'react'
 
let flagc = true;
function onClickClass()
{
    if(flagc)
    {
      document.getElementById("cls").style.visibility="visible";
    document.getElementById("cls").style.display="inline-block";
    flagc=false;
    }
    else
    {
    flagc = true;
    document.getElementById("cls").style.visibility="hidden";
    }
    // console.log("Worked "+flag );
}

let flagf = true;
function onClickFunction()
{
    if(flagf)
    {
      document.getElementById("funct").style.visibility="visible";
    document.getElementById("funct").style.display="inline-block";
    flagf=false;
    }
    else
    {
    flagf = true;
    document.getElementById("funct").style.visibility="hidden";
    }
    // console.log("Worked "+flag );
}

class FirstComponent extends Component{
  render(){
    return(
      <div className="item2" onClick={onClickClass}>
       <p>To See Styling in Class Component</p>
       
      </div>
    )
  }
}

function Functioncomponent (){
  return(
      <div className="item1" onClick={onClickFunction}>
      <p>To See Styling in Function Component</p>
    </div>
  )
}








function App() {
  return (
    <div className="App">
      <h1 className='heading'>Styling Using Functional and Class Component</h1>
      <div className='subhead'>
     {/* <div className='item1'><FirstComponent /></div> */}
     {/* <div className='item2'><Functioncomponent /></div> */}
     <FirstComponent />
     <Functioncomponent />
     </div>
     <div className="flex">
       <div id="cls" style={{visibility: "hidden"}}>
         <div id="box1" style={{height: "250px", width: "550px", marginTop: "80px", marginRight:"20px",  backgroundColor: "rgb(255, 134, 94)", padding: "2rem", border: "3px solid", borderRadius: "2rem", fontWeight: "bold"}}>
           <h1>This is created using Class Based Components</h1>
           <p> This is done using external css </p>
           <p style= {{color: "red"}}>This is done using inline css</p>
         </div>
       </div>
       <div id="funct" style={{visibility:"hidden"}}>
             <div id="box2" style={{height: "250px", width: "550px", backgroundColor: "rgb(254, 228, 64)", padding: "2rem", border: "3px solid",borderRadius: "2rem", fontWeight: "bold"}}>
               <h1>This is created using Functional Based Components</h1>
               <p> This is done using external css </p>
               <p style={{color: "red"}}>This is done using inline css</p>
             </div>
        </div>
     </div>

    </div>
  );
}

export default App;
