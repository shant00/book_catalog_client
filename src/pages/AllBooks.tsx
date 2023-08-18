import { Link } from "react-router-dom";
import image from "../assets/banner1.jpg";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
const dummyBooks = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "publicationDate": "1925-04-10T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b0"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Classic",
        "publicationDate": "1960-07-11T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b1"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "publicationDate": "1949-06-08T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b2"
    },
    // Add more book entries here
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "publicationDate": "1813-01-28T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b3"

    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publicationDate": "1937-09-21T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b4"
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Dystopian",
        "publicationDate": "1932-01-01T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b5"
    },
    // Add more book entries here
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "genre": "Adventure",
        "publicationDate": "1851-10-18T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b6"
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Coming-of-Age",
        "publicationDate": "1951-07-16T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b7"
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publicationDate": "1954-07-29T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b8"
    }, {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publicationDate": "1954-07-29T00:00:00.000Z",
        "reviews": [],
        "image": image,
        "_id": "60f7b1a0e6a5c3a8e8a7e3b8"
    },
    // Add more book entries here
];

export default function AllBooks() {


    return (
        <>
            <Navbar />
            <p className="text-center text-2xl font-medium pt-2">All Books</p>
            <div className="container mx-auto px-4 pb-8 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {dummyBooks.map((book, index) => (
                        <div key={index} className="max-w-xs m-auto p-4 border rounded shadow">
                            <img src={book.image} alt={book.title} className="w-full rounded" />
                            <p className="text-xl font-semibold">{book.title}</p>
                            <p className="text-gray-600">Writer: {book.author}</p>
                            <p className=" text-gray-800"> Genre: {book.genre}</p>
                            <p className="text-sm text-gray-500">
                                Publication Date: {new Date(book.publicationDate).toLocaleDateString()}
                            </p>
                            <div className="mt-4 flex justify-between">
                                <Link to={`/book-details/${book._id}}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">
                                    View Details
                                </Link>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}