import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-sky-500 h-screen w-screen">
      <h1 className="text-center text-5xl text-white font-bold p-5 underline">
        List of All the Projects{" "}
      </h1>
      <div>
        <ul>
          <Link
            to="/accordian"
            className="flex flex-col items-center text-2xl font-bold hover:text-3xl hover:m-2  m-1"
          >
            Accordian
          </Link>
        </ul>
        <ul>
          <Link
            to="/random-color-generator"
            className="flex flex-col items-center text-2xl font-bold hover:text-3xl hover:m-2  m-1"
          >
            Random Color Generator
          </Link>
        </ul>
        <ul>
          <Link
            to="/star-rating"
            className="flex flex-col items-center text-2xl font-bold hover:text-3xl hover:m-2  m-1"
          >
            Star Rating
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Home;
