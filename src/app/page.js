import ExploreRooms from "@/components/ExploreRooms";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyStudyNook from "@/components/WhyStudyNook";

export const metadata = {
  title: "StudyNook - Home",
  description: "Welcome to StudyNook, your ultimate study companion!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyStudyNook />
      <ExploreRooms />
      <HowItWorks />
    </>
  );
}

