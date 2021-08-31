import React from "react";
import ImageGallery from "react-image-gallery";
import IMAGES from "../../../assets/Shop/Clothing/index";
import "../../../Styles/Shop/Item/Item.css";

const ImageSlide = () => {
  const images = [
    {
      original: IMAGES.img1,
      thumbnail: IMAGES.img1,
    },
    {
      original: IMAGES.img2,
      thumbnail: IMAGES.img2,
    },
    {
      original: IMAGES.img3,
      thumbnail: IMAGES.img3,
    },
    {
      original: IMAGES.img4,
      thumbnail: IMAGES.img4,
    },
    {
      original: IMAGES.img5,
      thumbnail: IMAGES.img5,
    },
  ];

  return (
    <div>
      <ImageGallery showNav={false} thumbnailPosition="left" showFullscreenButton={false} showPlayButton={false} items={images} />
    </div>
  );
};

export default ImageSlide;
