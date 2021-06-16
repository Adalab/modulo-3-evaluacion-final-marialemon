import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  return (
    <form className="Filters">
      <FilterByName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
      <FilterBySpecies
        filterSpecies={props.filterSpecies}
        handleFilter={props.handleFilter}
      />
    </form>
  );
}

export default Filters;
