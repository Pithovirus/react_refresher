import React, { setState } from "react";

const ImageSlider = () => {
  const [data, setData] = setState({
    images: [
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    idx: 0,
  });

  const handleNext = () => {
    setData({
      ...data,
      idx: data.idx + 1,
    });
  };

  return (
    <div>
      <img
        style={{
          width: 100,
          height: 100,
        }}
        src={data.images[data.idx]}
        alt=""
      />
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default ImageSlider;
