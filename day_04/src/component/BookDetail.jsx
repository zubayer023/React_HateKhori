import PropTypes from "prop-types";
const BookDetail = ({ title, author }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

BookDetail.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetail;
