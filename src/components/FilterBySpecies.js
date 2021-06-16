function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };

  return (
    <select
      className="inputSelect"
      name="species"
      id="species"
      value={props.filterSpecies}
      onChange={handleChange}>
      <option value="All">Todos</option>
      <option value="Human">Humano</option>
      <option value="Humanoid">Humanoide</option>
      <option value="Alien">Alien</option>
      <option value="Cronenberg">Cronenberg</option>
    </select>
  );
}

export default FilterBySpecies;
