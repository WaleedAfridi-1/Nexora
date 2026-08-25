import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import ProblemsSolutions from "../components/ProblemsSolutions";
import  Features  from "../components/Features";
import Test from "@/components/Test";
import IntegrationFeature from "@/components/Integration";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="space-y-6">

      <Hero/>

      <TrustedBy/>

      <ProblemsSolutions/>

      <Features/>

      <IntegrationFeature/>

      <UseCases/>

      <Stats/>
      
      <Testimonials/>

      <Test/>.
    </main>
  );
}
