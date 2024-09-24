import {
  Navbar,
  LandingPage,
  Marquee,
  About,
  Eyes,
  Projects,
} from "./components";

function App() {
  return (
    <div className="bg-[#f1f1f1]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
    </div>
  );
}

export default App;
