import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState();
  const [pressure, setPressure] = useState();
  const [Humidity, setHumidity] = useState();

  useEffect(() => {
    const weather = async () => {
      let data = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?appid=9d167cc34b6ff9a39fbbaebd2b64afe8&q=bangalore"
      );
      data = await data.json();
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setPressure(data.main.pressure);
      console.log(data);
    };
    weather();
  });

  return (
    <div className="App">
      <div className="vs">
        <div className="rb">
          <p style={{ color: "white" }}>Ghaziabad</p>
          <p style={{ color: "white" }}>{new Date().toLocaleTimeString()}</p>
        </div>
        <div className="temp" style={{ color: "black" }}>
          {temp}°F
        </div>
        <div className="humi">
          <ul style={{ listStyle: "none" }}>
            <li style={{ color: "white" }}> Pressure {pressure} </li>
            <li style={{ color: "white" }}> Humidity {Humidity} </li>
          </ul>
          <img className="img" src="logo192.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
