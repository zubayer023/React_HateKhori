
import BookDetail from './BookDetail';
import FeatureBook from './FeatureBook';
import PropTypes from "prop-types";

const BookRow = ({ book, onFeatureBook }) => {
  console.log(book)
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow rounded-md'>
    <BookDetail  title={book.title} author={book.author} />
    <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  )
}

BookRow.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired
}

export default BookRow