import Banner from "../layouts/Banner";
import BookCategory from "../layouts/BookCategory";
import ContactUs from "../layouts/ContactUs";
import HighLightedBook from "../layouts/HighLightedBook";

export default function Home() {
  return (
    <>
      <Banner />
      <BookCategory />
      <HighLightedBook />
      <ContactUs />
    </>
  );
}
