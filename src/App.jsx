import {Navbar} from "./components";
import {Footer, Hero, Howtobuy, Roadmap, Tokenomics} from "./container";

function App() {
  return (
    <div className='font-sans'>
      {/* Navbar */}
      <Navbar />
      <Hero />
      {/* Tokenomics Section */}
      <Tokenomics />

      {/* How to Buy Section */}
      <Howtobuy />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
