import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();

      setProducts((prevData) => [...prevData, ...result.products]);
      setTotal(result.total);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  const disableButton = products.length >= 100;

  return (
    <div className="flex min-h-screen flex-col gap-5 p-5">
      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 rounded-lg border border-gray-300 p-5 shadow-sm transition-shadow hover:shadow-lg"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-[200px] w-full object-cover"
            />

            <p className="text-center font-semibold text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex flex-col items-center gap-2">
        <button
          disabled={disableButton || loading}
          onClick={() => setCount((prev) => prev + 1)}
          className={`rounded-md border-2 px-4 py-2 font-semibold transition ${
            disableButton || loading
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Loading..." : "Load More Products"}
        </button>

        {disableButton && (
          <p className="font-medium text-gray-600">
            You have reached all available products.
          </p>
        )}
      </div>
    </div>
  );
}
