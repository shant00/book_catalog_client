
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import "./banner.css";

const images: { src: string; alt: string, label: string, content: string }[] = [
  {
    src: banner1,
    alt: 'First slide',
    label: 'First slide label',
    content: 'Some representative placeholder content for the first slide.',
  },
  {
    src: banner3,
    alt: 'Second slide',
    label: 'Second slide label',
    content: 'Some representative placeholder content for the second slide.',
  },
  {
    src: banner2,
    alt: 'Third slide',
    label: 'Third slide label',
    content: 'Some representative placeholder content for the third slide.',
  },
  {
    src: banner4,
    alt: 'Fourth slide',
    label: 'Fourth slide label',
    content: 'Some representative placeholder content for the fourth slide.',
  },
];
const Banner = () => {
  return (
    <div className="carousel-container" style={{
      // maxWidth: '800px', 
      margin: '0 auto',
      height: '400px',
    }}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        renderIndicator={() => null}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={{
              maxHeight: '400px',
              margin: '0 auto'
            }} />
            <div className=" customLegend">
              <h2>{image.label}</h2>
              <p>{image.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}


export default Banner;