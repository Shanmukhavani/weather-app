
import { useState } from 'react';
import './App.css';

function App() {
  
  const [city,setCity] = useState('');
  const [temp,setTemp] =useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=>response.json()
    ).then(
      data=>{
        const kelvin =data.main.temp;
        // console.log(kelvin);
        const celcius =kelvin-273.15;
        setTemp("Temperature at "+city +" is \n "+Math.round(celcius)+"ºC" );
        //setTemp(Math.round(celcius));
      }
    )
      
  }
  return (
    <div className="App">
      <div className='nav-bar'>
          <div className='logo'>

          </div>
            <h1>WEATHER APP</h1>
            <form onSubmit={submitHandler}>
               <input type='text' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
               <button type='submit'>Search</button>
            </form>
            
      </div>
      <p>
        You can find temperature of any city here...
        <h5 className='result'>{temp}</h5>
        
      </p>
      
      <div>
      
      </div>
      
    </div>
  );
}

export default App;
