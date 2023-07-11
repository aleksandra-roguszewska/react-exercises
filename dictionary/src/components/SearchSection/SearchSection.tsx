const SearchSection = ({ getData }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const searchWord: string = e.target.search_field.value;
    getData(searchWord);
    e.target.reset();
  };

  return (
    <>
      <h1>English dictionary</h1>
      <form className="search_form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="search_field"
          id="search_field"
          placeholder="I'm looking for the meaning of ... "
          required
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchSection;
