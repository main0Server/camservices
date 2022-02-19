import Navigation from "./Components/Navigation/Navigation";
import Masthead from "./Components/Masthead/Masthead";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Product from "./Components/Product/Product";
import CallToAction from "./Components/CallToAction/CallToAction";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Masthead />
      <About />
      <Services />
      <Product />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
