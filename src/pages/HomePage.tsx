import Categories from "../components/categories/Categories";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Carousel from "../components/testimonial/Carousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Carousel />
      <Categories />
      <Footer />
    </>
  );
}
