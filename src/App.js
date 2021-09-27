import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({});
function App() {
  return (
    <>
      <HeaderBar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
