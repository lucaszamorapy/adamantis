"use client";
import OurServices from "./services/our-services";
import Projects from "./projects/projects";
import Start from "./start/start";
import UseIsMobile from "../hooks/use-is-mobile";

const HomePage = () => {
  const isMobile = UseIsMobile();
  return (
    <main className="flex flex-col lg:gap-64 gap-34 mt-10">
      <Start />
      <OurServices />
      <Projects isMobile={isMobile} />
    </main>
  );
};

export default HomePage;
