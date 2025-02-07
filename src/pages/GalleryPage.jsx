import { useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AuthContext } from "../authprovider/AuthProvider";
import PageTitle from "../components/PageTitle";

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { user } = useContext(AuthContext);

  // Gallery images
  const images = [
    {
      src: "https://i.ibb.co.com/z6q0Y29/chicken.jpg",
      title: "Image 1",
    },
    {
      src: "https://i.ibb.co.com/dmr6Cyn/two.jpg",
      title: "Image 2",
    },
    {
      src: "https://i.ibb.co.com/9tG26W4/sea.jpg",
      title: "Image 3",
    },
    {
      src: "https://i.ibb.co.com/1myskDF/thai.jpg",
      title: "Image 4",
    },
    {
      src: "https://i.ibb.co.com/StHVDkf/chinese.jpg",
      title: "Image 5",
    },
    {
      src: "https://i.ibb.co.com/Mk18HJV/one.jpg",
      title: "Image 6",
    },
    {
      src: "https://i.ibb.co.com/qjM0rTX/three.jpg",
      title: "Image 7",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Image+8",
      title: "Image 8",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Image+9",
      title: "Image 9",
    },
    {
      src: "https://via.placeholder.com/300x200?text=Image+10",
      title: "Image 10",
    },
  ];

  // Open lightbox
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <PageTitle
        title={"Gallery Page"}
        desc={"Explore our amazing gallery"}
      ></PageTitle>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Page Title */}

        {/* Gallery Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-40 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className=" flex-col absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">{image.title}</p>
                <p className="text-white font-semibold">{user?.displayName}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            index={currentImageIndex}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
