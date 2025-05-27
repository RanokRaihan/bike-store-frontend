import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-start bg-green-800 bg-[url(/src/assets/images/banner-bike-v2.jpg)] bg-cover bg-center">
      <div className="text-center p-8 mt-4 lg:mt-10 space-y-6">
        <h1
          className="text-6xl lg:text-8xl font-bold text-slate-800 "
          style={{ fontFamily: "Bebas Neue" }}
        >
          Welcome to <span className="ml-4 mr-2">MOTO</span>
          <span className="text-green-500">VIBE</span>
        </h1>
        <h2 className="text-md md:text-2xl font-semibold text-green-600 mt-2">
          Embark on a journey of freedom and exhilaration, and let your dreams
          take flight on two wheels
        </h2>

        <Button size="lg" className="mt-4 text-white p-6" asChild>
          <Link to="/test-drive">Schedule a test drive</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
