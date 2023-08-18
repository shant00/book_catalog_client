import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import './BookCategory.css';
const categories = [
    { name: 'Electronics', image: banner1 },
    { name: 'Clothing', image: banner2 },
    { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 },
    // Add more categories as needed
];
const itemsPerSlide = 7;
const BookCategory = () => {
    const slides = [];
    for (let i = 0; i < categories.length; i += itemsPerSlide) {
        const slideCategories = categories.slice(i, i + itemsPerSlide);
        slides.push(
            <div key={i} className="category-slide">
                {slideCategories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-content">
                            <img src={category.image} alt={category.name} className="category-image" />
                        </div>
                        <div className="category-details">
                            <h2>{category.name}</h2>

                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="category-carousel">
            <p className='text-center text-lg font-semibold' >Book Category</p>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={7000}
                showStatus={false}
                renderIndicator={() => null}
            >
                {slides}
            </Carousel>
        </div>
    );
};

export default BookCategory;
