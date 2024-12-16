import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import CoreValuesSection from "./components/CoreValuesSection/CoreValuesSection";
import TechnologyMattersSection from "./components/TechnologyMattersSection/TechnologyMattersSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import PatentsSection from "./components/PatentsSection/PatentsSection";
// import HeroSection from "next/image"
import VisionSection from "./components/VisionSection/VisionSection";

export default function Home() {
  return (
   <>
  <HeroSection />
  <AdvantagesSection />
  <CoreValuesSection />
  <TechnologyMattersSection />
  <WhyChooseUsSection />
  <PatentsSection />
  <VisionSection />

   </>
  );
}
