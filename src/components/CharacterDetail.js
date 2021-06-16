import { Link } from "react-router-dom";

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
              <li>Episodios: {props.character.episode.length}</li>
            </ul>
          </div>
        </article>
      </div>
    </Link>
  );
}

export default CharacterDetail;
