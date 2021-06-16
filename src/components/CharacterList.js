import CharacterCard from "./CharacterCard";

function CharacterList(props) {
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
