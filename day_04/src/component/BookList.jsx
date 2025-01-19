import BookRow from "./BookRow";
import PropTypes from "prop-types";

const BookList = ({ searchTerm, Books, onFeatureBook }) => {
  const rows = [];
  Books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow book={book} onFeatureBook={onFeatureBook}  key={book.id} />);
  });
  return (
    <div className="space-y-4">
      {rows}
    </div>
  );
};

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  Books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired
};

export default BookList;
