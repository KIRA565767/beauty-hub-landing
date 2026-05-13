import { DiagnosticFlow } from "./components/DiagnosticFlow";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ForNotFor } from "./components/ForNotFor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { KnowledgeBaseIndex } from "./components/KnowledgeBaseIndex";
import { PainMap } from "./components/PainMap";
import { TelegramHub } from "./components/TelegramHub";
import { WhatIsBeautyHub } from "./components/WhatIsBeautyHub";

export function BeautyHubPage() {
  return (
    <main className="beauty-hub min-h-screen bg-[#15110D] text-[#F3EADF]">
      <Header />
      <Hero />
      <WhatIsBeautyHub />
      <PainMap />
      <DiagnosticFlow />
      <KnowledgeBaseIndex />
      <TelegramHub />
      <ForNotFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
