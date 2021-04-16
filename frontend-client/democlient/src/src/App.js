import './App.scss';
import React, {useState, useEffect} from "react";
import Person from "./Person.js";
import EmptyData from "./EmptyData";

const App = () => {
  
  const [data, setData] = useState([]);
  
  const getData = () => {
    fetch("http://localhost:8080/api/v1/person",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then(res => {
        return res.json()
      })
      .then(jsondata => {
        console.log(jsondata);
        setData(jsondata);
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="wrapper">
    <h1>KyShard Repository</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="https://github.com/Kyjko">GitHub</a></li>
      </ul>
    </nav>
    <div className="App">
      {
        (data && data.length > 0) ? (data.map(p => <Person id={p.id} name={p.name} />)) : <EmptyData />
      }
    </div>
    </div>
  );
}

export default App;
