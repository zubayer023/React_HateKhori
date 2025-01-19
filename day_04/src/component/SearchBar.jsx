import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <form>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text"
        placeholder="Search books..."
        className="border mb-4 border-gray-400 rounded-md p-2 w-full"
      />
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
