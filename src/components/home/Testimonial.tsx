import customer1 from "../../assets/images/customer-1.png";

const Testimonial = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto my-4 p-4 ">
        <div className="mt-10 mb-12 text-center">
          <h1 className="text-4xl text-primary  font-semibold ">
            Testimonials
          </h1>
          <p className="mt-2 text-gray-500">
            Explore What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const TestimonialCard = () => {
  return (
    <div className=" p-6 grow text-center space-y-4 rounded-lg">
      <div className="size-40 mx-auto rounded-full overflow-hidden ">
        <img
          src={customer1}
          alt="customer1"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold">Mark Raffelow</h2>
      <p className="text-gray-500">
        Great service and friendly staff! Highly recommend this store for all
        your biking needs.
      </p>
    </div>
  );
};
