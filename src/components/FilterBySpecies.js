function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
    console.log(props.handleFilter);
  };

  return (
    <select
      className="inputSelect"
      name="species"
      id="species"
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
