import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/whereToBuy/WhereToBuy";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy/>
      <Footer/>
    </div>
  );
}

export default App;
