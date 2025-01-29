
import BookDetails from './BookDetails';
import PropTypes from "prop-types";

const BookRow = ({ book }) => {
  return (
    <div className='bg-white p-4 shadow-md rounded-md'>
      <BookDetails  title={book.title} author={book.author} />
    </div>
  )
}

BookRow.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookRow
