'use client'
import HeroSection from "@/components/home/HeroSection";
import ServicesList from "@/components/home/ServicesList";
import Service from "@/components/home/Service";
import GymPlans from "@/components/home/GymPlans";
import About from "@/components/home/About";



export default function Home() {
  return (
    <>
      <div className="relative z-30">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto">
        <ServicesList />
        <Service/>
      </div>
      <GymPlans/>
      {/* <About/> */}


    </>

  );
}
