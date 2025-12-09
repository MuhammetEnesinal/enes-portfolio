// src/pages/AboutPage.jsx
import AboutEducation from "../components/about/AboutEducation";
import AboutGoals from "../components/about/AboutGoals";
import AboutHeader from "../components/about/AboutHeader";
import AboutInterests from "../components/about/AboutInterests";
import AboutIntro from "../components/about/AboutIntro";
import AboutProfileCard from "../components/about/AboutProfileCard";
import AboutSkills from "../components/about/AboutSkills";
import CardWrapper from "../components/about/CardWrapper";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-10 md:px-20 py-24 bg-gray-100">
      <AboutHeader />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-1 w-full">
          <CardWrapper>
            <AboutProfileCard />
          </CardWrapper>
        </div>

        <div className="lg:col-span-2 w-full space-y-10">
          <CardWrapper>
            <AboutIntro />
          </CardWrapper>

          <CardWrapper>
            <AboutEducation />
          </CardWrapper>

          <CardWrapper>
            <AboutSkills />
          </CardWrapper>

          <CardWrapper>
            <AboutGoals />
          </CardWrapper>

          <CardWrapper>
            <AboutInterests />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
}
