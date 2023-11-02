import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Book = ({ book }) => {
  const navigation =useNavigation()
  console.log(navigation.state)
  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-xl hover:shadow-2xl">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-84"
        />

        <div className="bg-black bg-opacity-75 inset-0 px-6 py-4 hover:opacity-100 opacity-0 text-gray-300 absolute transition-opacity duration-200 flex flex-col">
          <p className="text-lg font-bold">{book.title}</p>
          <br />
          <p className="mt-auto text-sm">{book.subtitle.substring(0, 40)}...</p>
          <br />
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
