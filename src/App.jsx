import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import TechnologySection from './sections/TechnologySection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import CertificationsSection from './sections/CertificationsSection'
import AchievementsSection from './sections/AchievementsSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;