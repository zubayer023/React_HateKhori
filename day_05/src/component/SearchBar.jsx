import PropTypes from "prop-types";

const SearchBar = ({ SearchBar, setSharchBar}) => {
  console.log(SearchBar);
  return (
    <form >
      <input
        className="mb-4 border rounded-md p-1"
        type="text"
        placeholder="Search books..."
        value={SearchBar}
        onChange={(e) => setSharchBar(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  SearchBar: PropTypes.string.isRequired,
  setSharchBar: PropTypes.func.isRequired,
};

export default SearchBar;
