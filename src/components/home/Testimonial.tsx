import customer1 from "../../assets/images/customer-1.jpg";
import customer2 from "../../assets/images/customer-2.jpg";
import customer3 from "../../assets/images/customer-3.jpg";

type TestimonialData = {
  id: string;
  name: string;
  image: string;
  review: string;
};

const testimoniaData = [
  {
    id: "1",
    name: "Jesica Smith",
    image: customer1,
    review:
      "Great service and friendly staff! Highly recommend this store for all your biking needs.",
  },

  {
    id: "2",
    name: "Mark Raffelow",
    image: customer2,
    review:
      "Amazing selection of bikes and accessories. The staff was very helpful and knowledgeable.",
  },
  {
    id: "3",
    name: "Morgan Mathews",
    image: customer3,
    review:
      "I had a great experience at this store. The prices are reasonable and the quality is top-notch.",
  },
];

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
          {testimoniaData.map((data) => (
            <TestimonialCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const TestimonialCard = ({ data }: { data: TestimonialData }) => {
  return (
    <div className=" p-6 grow text-center space-y-4 rounded-lg">
      <div className="size-40 mx-auto rounded-full overflow-hidden ">
        <img
          src={data.image}
          alt="customer1"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-gray-500">{data.review}</p>
    </div>
  );
};
