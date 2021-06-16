function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
    console.log(props.handleFilter);
  };

  return (
    <select name="species" id="species" onChange={handleChange}>
      <option value="all">Todos</option>
      <option value="human">Humano</option>
      <option value="humanoid">Humanoide</option>
      <option value="alien">Alien</option>
      <option value="cronenberg">Cronenberg</option>
    </select>
  );
}

export default FilterBySpecies;
