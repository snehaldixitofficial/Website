import { useState, useCallback } from 'react';
import ScientificBoot from '@/components/ScientificBoot';
import GridBackground from '@/components/GridBackground';
import BiotechParticles from '@/components/BiotechParticles';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  return (
    <>
      {!booted && <ScientificBoot onComplete={handleBootComplete} />}
      {booted && (
        <>
          <GridBackground />
          <BiotechParticles />
          <Navigation />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
