import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Raghav Sethi have some jokes please listen carefully. Vite!</h1>
      <h1>Jokes : {jokes.length} </h1>
      {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  );
}

export default App;
