import BookRow from "./BookRow";
import PropTypes from "prop-types";
PropTypes;
const BookList = ({ books, sharchBar }) => {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(sharchBar.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow book={book} key={book.id} />);
  });

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3">{rows}</div>;
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  sharchBar: PropTypes.string.isRequired,
};

export default BookList;
