import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByType from "./FilterByType";
import FilterByStatus from "./FilterByStatus";

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
      <FilterByType
        filterType={props.filterType}
        handleFilter={props.handleFilter}
      />
      <FilterByStatus
        filterStatus={props.filterStatus}
        handleFilter={props.handleFilter}
      />
    </form>
  );
}

export default Filters;
