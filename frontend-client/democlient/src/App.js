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
    <div className="App">
      {
        (data && data.length > 0) ? (data.map(p => <Person id={p.id} name={p.name} />)) : <EmptyData />
      }
    </div>
  );
}

export default App;
