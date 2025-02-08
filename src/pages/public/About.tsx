import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className=" bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-primary">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our bike store! We are passionate about providing the best
          bikes and accessories to our customers.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>High-quality bikes</li>
          <li>Wide range of accessories [very soon]</li>
          <li>Expert staff</li>
          <li>Excellent customer service</li>
          <li>Free standard Delevery and free returns</li>
        </ul>
        <p className="text-lg mb-4">
          We have been in business for over 10 years and have built a reputation
          for providing top-quality products and excellent customer service. We
          are committed to helping you find the perfect bike and accessories for
          your needs.
        </p>
        <p className="text-lg mb-4">
          Our mission is to make biking accessible and enjoyable for everyone.
          Whether you're a seasoned cyclist or just starting out, we have
          something for you.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default About;
