import bannerBike from "../../assets/images/banner-bike.png";
const Banner = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#BDB099]">
      <div>
        <h1>Ride a bike, save the world</h1>
      </div>
      <div>
        <img src={bannerBike} alt="biker" />
      </div>
    </div>
  );
};

export default Banner;
