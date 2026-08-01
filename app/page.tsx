import AmbientBackground from "@/components/AmbientBackground";
import Particles from "@/components/Particles";
import ProgressBar from "@/components/ProgressBar";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import DateCounter from "@/components/DateCounter";
import FirstMemories from "@/components/FirstMemories";
import WhatILove from "@/components/WhatILove";
import AlwaysByMySide from "@/components/AlwaysByMySide";
import WhatILearned from "@/components/WhatILearned";
import PhotoGallery from "@/components/PhotoGallery";
import Anecdotes from "@/components/Anecdotes";
import Thanks from "@/components/Thanks";
import SavedMe from "@/components/SavedMe";
import YouAre from "@/components/YouAre";
import Future from "@/components/Future";
import Promise from "@/components/Promise";
import Letter from "@/components/Letter";
import FinalQuestion from "@/components/FinalQuestion";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AmbientBackground />
      <Particles />
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[95] opacity-[0.05]"
      />
      <ProgressBar />
      <MusicToggle />

      <Hero />
      <Timeline />
      <DateCounter />
      <FirstMemories />
      <WhatILove />
      <AlwaysByMySide />
      <WhatILearned />
      <PhotoGallery />
      <Anecdotes />
      <Thanks />
      <SavedMe />
      <YouAre />
      <Future />
      <Promise />
      <Letter />
      <FinalQuestion />
    </main>
  );
}
