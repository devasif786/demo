
import './App.css';
import {Button} from "react-bootstrap"
import React, {useState} from "react"
import axios from "axios"

function App() {
 
  const[temp,setTemp]=useState(100)
  const[humidity ,setHumidity]=useState(0)
  const[cityText,setCityText]=useState("")
  const [error,setError]=useState(null)


async function fetchweather(){
console.log(cityText)
//https://api.openweathermap.org/data/2.5/weather?q=$
//477b0577b454816f45f8516126ea4bb8
try{
let response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=477b0577b454816f45f8516126ea4bb8`)
console.log(response)
setError(null)
setTemp(response.data.main.temp)
setHumidity(response.data.main.humidity)

}catch(error){
  console.log(error)
  setError("city not found")
}


}

  return (
    <div className="App">
   <h1 style={{textAlign:"center"}} >Weather app</h1>
   <div>
    <input className="form-control"type="text" value={cityText} onChange={(e)=>{setCityText(e.target.value)}}></input>
    
    <Button onClick={fetchweather}classNmae="btn btn"style={{marginTop:"10px"}}>Submit</Button>
   </div>
   {error ? <div>{error}</div>: <div className="box">
   <h3> Temp:{temp} f</h3>
   <h3>Humidity:{humidity} %</h3>
   </div>}
   
    </div>
  );
}

export default App;
