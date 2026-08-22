import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import ProblemsSolutions from "../components/ProblemsSolutions";
import  Features  from "../components/Features";
import Test from "../components/Test";
import HowNexoraWorks from "@/components/Integration";


export default function Home() {
  return (
    <main className="space-y-6">

      <Hero/>

      <TrustedBy/>

      <ProblemsSolutions/>

      <Features/>

      <HowNexoraWorks/>

      <Test/>.
    </main>
  );
}
