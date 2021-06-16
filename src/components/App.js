import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylesheets/App.css";
import getApiData from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";

//podemos crear una const para pedir el localStorage fuera del componente
//porque solo queremos que se ejecute una vez, no cada vez que se renderice
//aunque funcionaría tanto si está fuera como si está dentro
//el array vacío significa que if characters is undefined, ponme []
const charactersLocalStorageData = ls.get("characters", []);

function App() {
  const [characters, setCharacters] = useState(charactersLocalStorageData);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "All")
  );

  useEffect(
    () => {
      //montaje, llamamos a la api

      if (characters.length === 0) {
        getApiData().then((charactersData) => {
          //los datos que se guardan en el state son el filteredData del fetch
          //por eso usamos then, porque lo que retorna el primer then, lo recibe el siguiente then
          //esto es porque los then se encadenan
          setCharacters(charactersData);
        });
      }
    },
    [] /* cuándo ejecutar useEffect */
  );

  //guardamos en localStorage
  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [characters, filterName, filterSpecies]);

  //EV HANDLER

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };

  //RENDER
  //filtramos por personaje y comprobamos si incluyen el filterName
  const filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
    })
    .filter((eachCharacter) => {
      console.log(filterSpecies);
      if (filterSpecies === "All") {
        return true;
      } else {
        return eachCharacter.species === filterSpecies;
      }
    });

  console.log("State filter Characters", filteredCharacters);
  console.log("State filter Characters", filterSpecies);

  return (
    <>
      <header className="header">
        <Link to="/">
          <h1>Rick and Morty</h1>
          <img
            src="../../public/Rick_and_Morty_logo.png"
            alt="Rick and Morty logotipo"
          />
        </Link>
        <Filters handleFilter={handleFilter} />
      </header>
      <main className="main">
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
