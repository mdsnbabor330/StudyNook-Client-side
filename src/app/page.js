import ExploreRooms from "@/components/ExploreRooms";
import Hero from "@/components/Hero";
import { Explora } from "next/font/google";

export const metadata = {
  title: "StudyNook - Home",
  description: "Welcome to StudyNook, your ultimate study companion!",
};

export default function Home() {
  return (
    < >
     <Hero/>
     <ExploreRooms/>
    </>
  );
}
