import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import ProblemsSolutions from "../components/ProblemsSolutions";
import  Features  from "../components/Features";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <main className="space-y-6">

      <Hero/>

      <TrustedBy/>

      <ProblemsSolutions/>

      <Features/>


      <UseCases/>


      <Stats/>
      
      <Testimonials/>

      <Pricing/>
      
      <Resources/>

      <FAQ/>
      
      <CTA/>

    </main>
  );
}
