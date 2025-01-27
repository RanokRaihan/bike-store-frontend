import { Link } from "react-router-dom";

const Commitment = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 my-10 p-4">
      <div className="border-2 border-gray-500 border-dashed p-6 grow text-center space-y-4 rounded-lg">
        <h3 className="flex flex-col text-center space-y-4">
          <span className="text-gray-400 text-lg">Totaly Free</span>
          <span className="font-bold text-3xl ">TEST DRIVE</span>
        </h3>
        <div>
          <Link
            to="/register"
            className="text-primary hover:text-green-400  underline underline-offset-4 italic"
          >
            More info here
          </Link>
        </div>
      </div>
      <div className="border-2 border-gray-500 border-dashed p-6 grow text-center space-y-4 rounded-lg">
        <h3 className="flex flex-col text-center space-y-4">
          <span className="text-gray-400 text-lg">For all standard offer</span>
          <span className="font-bold text-3xl ">FREE SHIPPING</span>
        </h3>
        <div>
          <Link
            to="/register"
            className="text-primary hover:text-green-400  underline underline-offset-4 italic"
          >
            More info here
          </Link>
        </div>
      </div>
      <div className="border-2 border-gray-500 border-dashed p-6 grow text-center space-y-4 rounded-lg">
        <h3 className="flex flex-col text-center space-y-4">
          <span className="text-gray-400 text-lg">In 30 days</span>
          <span className="font-bold text-3xl ">FREE RETURN</span>
        </h3>
        <div>
          <Link
            to="/register"
            className="text-primary hover:text-green-400  underline underline-offset-4 italic"
          >
            More info here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
