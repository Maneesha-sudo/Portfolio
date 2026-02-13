import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">


      {/* Content Section */}
      <div className="flex flex-col items-center text-center px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to NextBuy
        </h1>

        <p className="text-gray-600 mb-6 max-w-xl">
          Discover high-quality products at unbeatable prices.
          Shop smart, shop easy.
        </p>
        {/* Hero Image */}
        <img
          src="https://media.istockphoto.com/id/1157459058/photo/young-woman-with-shopping-bags-riding-trolley.jpg?s=612x612&w=0&k=20&c=nTjWjCed_gUe0OnpHG3IlCOc6QqYDTdXkf3Asu0RtNY="
          alt="Shopping"
          className="w-full h-[400px] object-cover" />
        <Link
          to="/products"
          className="mt-3 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Explore Products
        </Link>
      </div>

    </div>
  );
}

export default Home;
