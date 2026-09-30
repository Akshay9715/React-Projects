import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`); //This will return a list of object which will contain key such as id, author, height, download(link) etc...
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, page, limit]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }
  if (errorMessage) {
    return <div>Error occured {errorMessage}</div>;
  }

  return (
    <div className="relative flex h-[500px] w-[500px] items-center justify-center overflow-hidden border-4 rounded-3xl">
      <BsArrowLeftCircleFill
        className="absolute left-2 z-10 cursor-pointer text-4xl text-white drop-shadow-2xl"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={`absolute h-full w-full rounded-2xl object-cover ${currentSlide === index ? "opacity-100" : "opacity-0"} `}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="absolute right-2 z-10 cursor-pointer text-4xl text-white drop-shadow-2xl"
        onClick={handleNext}
      />
      <span className="flex absolute bottom-4">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={`m-1 h-4 w-4 cursor-pointer rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-white"} `}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
