import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  return (
    <Link to="/">
      <div className="CharacterDetailBackground">
        <article className="CharacterDetail">
          <img
            src={props.character.img}
            title={props.character.name}
            alt={props.character.name}
          />
          <div className="characterInfo">
            <h3>{props.character.name}</h3>
            <ul>
              <li>Status: {props.character.status}</li>
              <li>Especie: {props.character.species}</li>
              <li>Origen: {props.character.origin.name}</li>
              <li>Aparece en: {props.character.episode.length} episodios</li>
            </ul>
          </div>
        </article>
      </div>
    </Link>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default CharacterDetail;
