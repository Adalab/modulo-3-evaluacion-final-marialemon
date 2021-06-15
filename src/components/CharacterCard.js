function CharacterCard(props) {
  return (
    <li className="CharacterCard">
      <img src={props.eachCharacter.img} title={props.eachCharacter.name} />
      <div className="characterInfo">
        <h3>{props.eachCharacter.name}</h3>
        <p>{props.eachCharacter.species}</p>
      </div>
    </li>
  );
}

export default CharacterCard;
