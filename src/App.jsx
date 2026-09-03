import { NavBar } from "./Component/NavBar";
import { FlickeringGrid } from "./Component/ui/FlickeringGrid";
import { Starfall } from "./Component/ui/Starfall";
import Home from "./Pages/Home";

const FADE_MASK = "linear-gradient(to bottom, black, transparent)";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Starfall />
      </div>

      <div className="absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
        />
      </div>

      <div className="relative z-10">
        <Home />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
