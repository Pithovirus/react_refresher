import React, { useState } from "react";

const ImageSlider = () => {
  const [data, setData] = useState({
    images: [
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1205306/pexels-photo-1205306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1203916/pexels-photo-1203916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    idx: 0,
  });

  const handleNext = () => {
    setData({
      ...data,
      idx: (data.idx + 1) % data.images.length,
    });
  };

  return (
    <div>
      <img
        style={{
          paddingTop: 50,
          width: 200,
          height: 200,
        }}
        src={data.images[data.idx]}
        alt=""
      />
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default ImageSlider;
