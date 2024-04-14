import Benifits from "./Components/Benifits";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <Header />
        <Hero />
        <Benifits />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
