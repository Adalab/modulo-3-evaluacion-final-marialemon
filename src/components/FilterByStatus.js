function FilterByStatus(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };

  return (
    <select
      className="inputSelect"
      name="status"
      id="status"
      value={props.filterStatus}
      onChange={handleChange}>
      <option value="All">Todos</option>
      <option value="Alive">Vivo</option>
      <option value="Dead">Muerto</option>
      <option value="unknown">unknown</option>
    </select>
  );
}

export default FilterByStatus;
