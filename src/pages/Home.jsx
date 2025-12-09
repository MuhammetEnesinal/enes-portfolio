import AboutShort from "../components/home/AboutShort";
import Hero from "../components/home/HeroShort";
import ProjectsShort from "../components/home/ProjectsShort";
import SkillsShort from "../components/home/SkillsShort";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutShort />
      <SkillsShort />
      <ProjectsShort />
    </>
  );
}
