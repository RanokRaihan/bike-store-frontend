import Banner from "@/components/home/Banner";
import Commitment from "@/components/home/Commitment";
import Feature from "@/components/home/Feature";
import NewProduct from "@/components/home/NewProduct";
import NewsletterSection from "@/components/home/NewsLetter";
import StatsSection from "@/components/home/StatsSection";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Banner />
      <Commitment />
      <StatsSection />
      <Feature />
      <NewProduct />
      <WhyChooseUs />
      <Testimonial />
      <NewsletterSection />
    </main>
  );
};

export default Home;
