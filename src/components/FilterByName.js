function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
    console.log(props.handleFilter);
  };

  return (
    <input
      className="inputSearch"
      type="text"
      name="name"
      id="name"
      onChange={handleChange}
    />
  );
}

export default FilterByName;
