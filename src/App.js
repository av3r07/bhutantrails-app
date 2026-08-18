import { Disclaimer } from "./components/disclaimer";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Advantages } from "./components/advantages";
import { Handle } from "./components/handle";
import { Partners } from "./components/partners";
import { Discover } from "./components/discover";
import { About } from "./components/about";
import { Cards } from "./components/cards";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

import "./reset.css";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Disclaimer />
      <Navbar />
      <Hero />
      <Advantages />
      <Handle />
      <Partners />
      <Discover />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
