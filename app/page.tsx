import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Projects from "./Components/Projects";
import Zoom from "./Components/Zoom";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <Zoom/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}
