import { HomeSection } from "./components/HomeSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="bg-[#F0F8FF] text-[#000080] h-screen w-full font-body">
      <Navbar />
      <HomeSection />
    </main>
  )
}

export default App;
