import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  if (props.characters.length === 0) {
    return (
      <p className="notFoundMessage">
        Personaje no encontrado {props.filterName}
      </p>
    );
  }

  const characterCard = props.characters.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id}>
        <CharacterCard eachCharacter={eachCharacter} />
      </li>
    );
  });

  return <ul className="CharacterList">{characterCard}</ul>;
}

export default CharacterList;
