import { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/banner1.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface StarRatingProps {
    rating: number;
    onChange: (rating: number) => void;
}
const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
    return (
        <div className="flex items-center mb-2">
            <span className="mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    onClick={() => onChange(value)}
                    className={`text-yellow-400 cursor-pointer ${value <= rating ? 'fas' : 'far'
                        } fa-star`}
                ></span>
            ))}
        </div>
    );
};

const BookDetails = () => {
    const bookId = useParams()
    const { id } = bookId
    console.log(id);
    const book = {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "publicationDate": "1925-04-10T00:00:00.000Z",
        "reviews": [{
            "reviewer": "John Doe",
            "rating": 5,
            "description": "This is a great book!"

        },
        {
            "reviewer": "Jane Doe",
            "rating": 4,
            "description": "This is a great book!"
        }],
        "image": image
    }

    const [review, setReview] = useState({
        reviewer: '',
        rating: 0,
        description: ''
    });

    const handleReviewChange = (name: string, value: string) => {
        setReview(prevReview => ({
            ...prevReview,
            [name]: value
        }));
    };

    const handleSubmitReview = () => {
        // Handle submit logic here
    };
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">

                <div className="max-w-xl m-auto p-4 border rounded shadow">
                    <img src={book.image} alt={book.title} className="w-full mb-4 rounded" />
                    <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-gray-800 mb-4">{book.genre}</p>
                    <p className="text-gray-500 mb-4">
                        Publication Date: {new Date(book.publicationDate).toLocaleDateString()}
                    </p>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-gray-800">{/* Add book description here */}</p>
                    </div>
                    <div className="mb-4 flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                            Add to Cart
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                {/* Give Review Section */}
                <div className="max-w-xl m-auto p-4 border rounded shadow mt-4">
                    <h3 className="text-lg font-semibold mb-2">Give Review</h3>
                    <StarRating
                        rating={review.rating}
                        onChange={(value: any) => handleReviewChange('rating', value)}
                    />
                    <textarea
                        className="w-full p-2 border rounded mb-2"
                        rows={4}
                        placeholder="Write your review here..."
                        name="description"
                        value={review.description}
                        onChange={e => handleReviewChange('description', e.target.value)}
                    ></textarea>
                    <button
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full"
                        onClick={handleSubmitReview}
                    >
                        Submit Review
                    </button>
                </div>

                {/* Reviews Section */}
                <div className="max-w-xl m-auto p-4 border rounded shadow mt-4">
                    <div className="max-w-xl m-auto mt-4">
                        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                        {book.reviews.length === 0 ? (
                            <p>No reviews available for this book.</p>
                        ) : (
                            <div>
                                {book.reviews.map((review, index) => (
                                    <div key={index} className="mb-4 p-4 border rounded shadow">
                                        <p>
                                            <strong>Reviewer:</strong> {review.reviewer}
                                        </p>
                                        <StarRating rating={review.rating} onChange={() => { }} />
                                        <p>
                                            <strong>Description:</strong> {review.description}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookDetails;
