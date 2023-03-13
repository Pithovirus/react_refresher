// import "./App.css";
// import Counter2 from "../src/components/Counter";
// import ImageSlider from "./components/imageSlider2";
// import React, { useState } from "react";

// const App = () => {
//   const [visible, setState] = useState(true);
//   const whichComponentToShow = "ImageSlider";
//   const buttonText = visible ? "Hide" : "Show";

//   if (whichComponentToShow === "ImageSlider" && visible) {
//     return (
//       <div className="App">
//         <ImageSlider />
//         <button onClick={() => setState(false)}>{buttonText}</button>
//       </div>
//     );
//   } else if (whichComponentToShow === "Counter2" && !visible) {
//     return (
//       <div className="App">
//         <Counter2 />
//         <button onClick={() => setState(true)}> {buttonText}</button>
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// export default App;

// import "./App.css";
// import Counter2 from "../src/components/Counter";
// import ImageSlider from "./components/imageSlider2";
// import React, { useState } from "react";

// import { SideBar } from "../src/components/SideBar";

// const App = () => {
//   const [visible, setVisible] = useState(true);
//   const [whichComponentToShow, setWhichComponentToShow] =
//     useState("ImageSlider");

//   if (whichComponentToShow === "ImageSlider" && !visible) {
//     return (
//       <div className="App">
//         <ImageSlider />
//         <button onClick={() => setWhichComponentToShow("Counter2")}>
//           Show Counter
//         </button>
//       </div>
//     );
//   } else if (whichComponentToShow === "Counter2") {
//     return (
//       <div className="App">
//         <Counter2 />
//         <button onClick={() => setWhichComponentToShow("ImageSlider")}>
//           Show Slider
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <ImageSlider />
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// };

// export default App;
import { Forms } from "./components/Forms";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const { state, setVisible } = useState(true);

  return (
    <div className="App">
      <Forms />
    </div>
  );
};

export default App;
