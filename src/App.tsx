import HeroPage from "./pages/hero";
import IntroductionPage from "./pages/introduction";
import PrereqPage from "./pages/prereq";
import { ReactLenis } from "@studio-freight/react-lenis";
import FooterPage from "./pages/footer";
import InstallationPage from "./pages/installation";

export default function App() {
  return (
    <main>
      <svg
        className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.30"
            numOctaves="3"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
      </svg>
      <ReactLenis root>
        <div className="relative">
          <HeroPage />
        </div>
        <IntroductionPage />
        <PrereqPage />
        <InstallationPage />
        <FooterPage />
      </ReactLenis>
    </main>
  );
}
