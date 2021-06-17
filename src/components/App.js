import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "../stylesheets/App.css";
import getApiData from "../services/api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import logo from "../images/Rick_and_Morty_logo.png";

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
  }, [characters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  useEffect(() => {
    ls.set("filterSpecies", filterSpecies);
  }, [filterSpecies]);

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
      if (filterSpecies === "All") {
        return true;
      } else {
        return eachCharacter.species === filterSpecies;
      }
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.id;
    const foundCharacter = characters.find((eachCharacter) => {
      //búscame el id que sea igual al routeCharacterId
      //pasamos a entero el routeCharacterId porque era un string
      return eachCharacter.id === parseInt(routeCharacterId);
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p className="notFoundMessage">Personaje no encontrado</p>;
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Rick and Morty logotipo" title="Rick and Morty" />
        <Filters
          filterName={filterName}
          filterSpecies={filterSpecies}
          handleFilter={handleFilter}
        />
      </header>
      <main className="main">
        <CharacterList
          filterName={filterName}
          characters={filteredCharacters}
        />
        <Switch>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
}

export default App;
