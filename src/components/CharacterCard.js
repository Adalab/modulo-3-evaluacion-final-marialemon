import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.eachCharacter.id}`}>
      <article className="CharacterCard">
        <img
          src={props.eachCharacter.img}
          title={props.eachCharacter.name}
          alt={props.eachCharacter.name}
        />
        <div className="characterInfo">
          <h3>{props.eachCharacter.name}</h3>
          <p>{props.eachCharacter.species}</p>
        </div>
      </article>
    </Link>
  );
}

export default CharacterCard;
