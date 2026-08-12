"use client";
import OurServices from "./services/our-services";
import Projects from "./projects/projects";
import Start from "./start/start";
import UseIsMobile from "../hooks/use-is-mobile";
import Cta from "./cta/cta";
import Contact from "./contact/contact";

const HomePage = () => {
  const isMobile = UseIsMobile();
  return (
    <main className="flex flex-col lg:gap-64 gap-34 py-10">
      <Start />
      <OurServices />
      <Projects isMobile={isMobile} />
      <Cta />
      <Contact />
    </main>
  );
};

export default HomePage;
