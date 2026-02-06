import Navbar from '@/components/layout/Navbar';
import { Hero, CoreServices, Markets, Credentials, FinalCTA } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <CoreServices />
        <Markets />
        <Credentials />
        <FinalCTA />
      </main>
    </>
  );
}
