import Hero from '../components/Hero';
import TrustPitch from '../components/TrustPitch';
import UAIOffer from '../components/UAIOffer';
import WhySenthira from '../components/WhySenthira';
import FounderStory from '../components/FounderStory';
import CTASection from '../components/CTASection';
import FadeInSection from '../components/FadeInSection';

export default function HomePage() {
  return (
    <>
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection><TrustPitch /></FadeInSection>
      <FadeInSection><UAIOffer /></FadeInSection>
      <FadeInSection><WhySenthira /></FadeInSection>
      <FadeInSection><FounderStory /></FadeInSection>
      <FadeInSection><CTASection /></FadeInSection>
    </>
  );
} 