function FilterByType(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "type",
    });
  };

  return (
    <input
      className="inputSearch"
      type="text"
      name="type"
      id="type"
      value={props.filterType}
      onChange={handleChange}
    />
  );
}

export default FilterByType;
