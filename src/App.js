import "./App.css";
// import { Body, Body2 } from "../src/components/Body";
// import Header from "./components/Header";
// import Counter from "../src/components/Counter";
// import Counter2 from "../src/components/Counter";
import ImageSlider from "./components/imageSlider";
// const Body = () => {
//   return <p> Hi</p>;
// };

// function Body () {
//     return <p> Hi</p>;
//   };

const App = () => {
  // function add(a, b) {
  //   return a + b;
  // }
  return (
    <div className="App">
      <ImageSlider />

      {/* <Header
        title="Hello"
        num={5}
        myArr={[10, 2, 3]}
        myFunct={add}
        myObj={{
          a: 5,
          b: 6,
        }}
      />
      <Body2 />
      <Body myFunct={add} text="Heyo" text2="Yeeeeeet" /> */}
    </div>
  );
};

export default App;
