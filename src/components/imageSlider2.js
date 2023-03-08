import { useState } from "react";

const ImageSlider2 = () => {
  const [state, setState] = useState({
    images: [
      "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15786098/pexels-photo-15786098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1203916/pexels-photo-1203916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    idx: 0,
  });

  function handleNext() {
    setState({
      ...state,
      idx: (state.idx + 1) % state.images.length,
    });
  }

  function handlePrev() {
    setState({
      ...state,
      idx: (state.idx - 1) % state.images.length,
    });
  }

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img
        style={{
          paddingTop: 50,
          width: 200,
          height: 200,
        }}
        src={state.images[state.idx]}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageSlider2;
