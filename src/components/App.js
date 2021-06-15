import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylesheets/App.css";
import getApiData from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(
    () => {
      //montaje, llamamos a la api

      getApiData().then((charactersData) => {
        //los datos que se guardan en el state son el filteredData del fetch
        //por eso usamos then, porque lo que retorna el primer then, lo recibe el siguiente then
        //esto es porque los then se encadenan
        console.log(charactersData);
        setCharacters(charactersData);
      });

      //  return () => {
      //desmontaje
      //  };
    },
    [] /* cuándo ejecutar useEffect */
  );

  return (
    <>
      <header className="header">
        <Link to="/">
          <h1>Rick and Morty</h1>
        </Link>
        <Filters />
      </header>
      <main className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </main>
    </>
  );
}

export default App;
