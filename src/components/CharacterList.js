import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterCard = props.characters.map((eachCharacter) => {
    return (
      <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
    );
  });

  return <ul className="CharacterList">{characterCard}</ul>;
}

export default CharacterList;
