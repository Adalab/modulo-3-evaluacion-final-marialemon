import { Link } from "react-router-dom";
import iconStatus from "../services/getIconStatus";
import iconSpecies from "../services/getIconSpecies";
import PropTypes from "prop-types";

function CharacterCard(props) {
  return (
    <Link to={`/character/${props.eachCharacter.id}`}>
      <article className="CharacterCard">
        <img
          src={props.eachCharacter.img}
          title={props.eachCharacter.name}
          alt={props.eachCharacter.name}
        />
        <ul className="characterInfo">
          <li>
            <h3>{props.eachCharacter.name}</h3>
          </li>
          <li>
            {props.eachCharacter.species}{" "}
            {iconSpecies(props.eachCharacter.species)}
          </li>
          <li>{iconStatus(props.eachCharacter.status)}</li>
          <li>{props.eachCharacter.type}</li>
        </ul>
      </article>
    </Link>
  );
}

CharacterCard.propTypes = {
  eachCharacter: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
  }),
};
export default CharacterCard;
