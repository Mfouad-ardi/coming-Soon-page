import ComingSoonNewSection from "./sections/ComingSoonNew";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <>
      <div>
        <ComingSoonNewSection />
      </div>
      <SpeedInsights />
    </>
  );
}

export default App
