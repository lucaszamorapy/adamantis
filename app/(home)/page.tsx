import OurServices from "./services/our-services";
import Projects from "./projects/projects";
import Start from "./start/start";

const HomePage = () => {
  return (
    <main className="flex flex-col lg:gap-64 gap-34 mt-10">
      <Start />
      <OurServices />
      <Projects />
    </main>
  );
};

export default HomePage;
