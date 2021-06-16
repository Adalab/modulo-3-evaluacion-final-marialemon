import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  return (
    <form className="Filters">
      <FilterByName handleFilter={props.handleFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
    </form>
  );
}

export default Filters;
