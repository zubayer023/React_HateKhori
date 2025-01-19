import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import { useState } from "react";

const Boimela = () => {
  const BOOKS = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
    },
    { id: 2, title: "1984", author: "George Orwell", featured: false },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [Books, setBooks] = useState(BOOKS);

  const toggleFeatured = (id) => {
    setBooks(Books.map((book)=> book.id === id ? {...book, featured: !book.featured} : book))
  }

  console.log(Books);
  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList Books={Books} searchTerm={searchTerm} onFeatureBook={toggleFeatured} />
    </div>
  );
};

export default Boimela;
