import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import './BookCategory.css';
const categories = [
    { name: 'Electronics', image: banner1 },
    { name: 'Clothing', image: banner2 },
    { name: 'Books1', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books2', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books3', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books4', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books5', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books6', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books7', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books8', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books9', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books0', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books11', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books12', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books13', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books14', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books15', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books16', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books17', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books18', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books19', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books20', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books21', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books22', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books23', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books24', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books25', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books26', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books', image: banner3 }, { name: 'Books50', image: banner3 },
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
