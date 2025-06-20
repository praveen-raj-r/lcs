import AboutCompany from "@/components/app/about-us/about-company";
import Founders from "@/components/app/about-us/founders";
import HistorySlider from "@/components/app/about-us/history-slider";
import HowItsStarted from "@/components/app/about-us/how-its-started";
import Leadership from "@/components/app/about-us/leadership";
import Numbers from "@/components/app/about-us/numbers";
import BannerCarouselContent from "@/components/app/about-us/banner-carousel-content";
import Foundation from "@/components/app/about-us/foundation";
const AboutUs = () => {
  return (
    <div>
      <BannerCarouselContent />
      <AboutCompany />
      <Numbers />
      <HistorySlider />
      <HowItsStarted />
      <Founders />
      <Leadership />
      <Foundation />
    </div>
  );
};

export default AboutUs;
