import { BrowserRouter } from "react-router-dom";
import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { SocialsSection } from "./components/SocialsSection";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#F0F8FF] text-[#000080] h-full w-full font-body">
        <Navbar />
        <HomeSection />
        <SocialsSection />
        <Skills />
        <Works />
        <About />
        <Contact />
      </main>
    </BrowserRouter>
  );
}

export default App;
