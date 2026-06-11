import { useState } from "react";
import LegendNav from "./components/legendNav";
import Section from "./components/Section";
import FullScreenSection from "./components/FullScreenSection";
// import Library from "./components/Library";
import SidescrollingPhotographyPage from "./components/SidescrollingPhotographyPage";
import SidescrollingGraphicsPage from "./components/SidescrollingGraphicsPage";
import PhotographyGridPage from "./components/PhotographyGridPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    // { id: "library", label: "Library" },
    { id: "cut-and-sew", label: "Cut And Sew" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "miscellaneous", label: "Miscellaneous" },
    // { id: "contact", label: "Contact" },
  ];

  function scrollToSection(idx) {
    const el = document.getElementById(sections[idx].id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="transition-colors duration-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen google-sans-code-mypfolio flex rounded-xl">
      <LegendNav sections={sections} onToggle={setSidebarOpen} />

      <div
        className={`transition-all duration-300 flex-1 ${
          sidebarOpen ? "ml-32 sm:ml-52" : "ml-0 sm:ml-5"
        }`}
      >
        <FullScreenSection id="home">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/Portfolio+Assets/ToothandNailLogoMain.png"
                  alt="Tooth And Nail logo"
                  className="w-[200px] h-[200px] mb-[4vh] mt-[7vh] md:mt-[20vh] lg:mt-[20vh]"
                />
              </div>

              <div className="d-flex flex-col gap-3 mb-[4vh]">
                <h3 className="ml-2 text-2xl font-semibold mb-[2vh]">
                  JACK WEAKLY
                </h3>
                <p className="my-[2vh]">
                  <a href="https://www.instagram.com/jackadaktal/">
                    @jackadaktal
                  </a>{" "}
                </p>
                <p>
                  <a href="mailto:hello@toothandnail.xyz">
                    hello@toothandnail.xyz
                  </a>
                </p>
              </div>

              <div className="d-flex flex-col gap-3 py-5">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(idx)}
                    className="px-2 text-left text-sm hover:underline text-black dark:text-white google-sans-code-mypfolio"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullScreenSection>

        {/* <Section id="library">
          <Library />
        </Section> */}

        {/* <Section id="graphics">
          <GraphicsPage />
        </Section> */}

        <Section id="cut-and-sew">
          <SidescrollingPhotographyPage />
        </Section>

        <Section id="graphic-design">
          <SidescrollingGraphicsPage />
        </Section>

        <Section id="miscellaneous">
          <PhotographyGridPage />
        </Section>

        {/* <Section id="contact">
          <h2 className="ml-2 text-4xl font-semibold mb-2">Contact</h2>
          <p className="ml-2">
            <a href="https://www.instagram.com/jackadaktal/">@jackadaktal</a>
          </p>
          <p className="ml-2">
            <a href="mailto:hello@toothandnail.xyz">hello@toothandnail.xyz</a>
          </p>
        </Section> */}
      </div>
    </div>
  );
}

export default App;
