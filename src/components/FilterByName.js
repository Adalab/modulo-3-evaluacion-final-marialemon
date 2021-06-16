function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <input
      className="inputSearch"
      type="text"
      name="name"
      id="name"
      value={props.filterName}
      onChange={handleChange}
    />
  );
}

export default FilterByName;
