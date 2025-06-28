/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/indicators/grid.png";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import Video from "@/assets/videos/wt-50n.mp4";
import groupImg from "@/assets/indicators/wt-wi-group.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";
import { wi10nCard, wi400vpCard } from "@/data/indicators/wi";

const WeightIndicators = () => {
  return (
    <div className="relative bg-[#FFFFFF] overflow-hidden">
      <HeroSection />
      <div className="pt-[62px] max-w-5xl w-full mx-auto px-4">
        <div className="flex justify-between items-center">
          <IconText text="Industrial" color="red" />
          <CustomButton className="font-semibold text-lg">
            Compare all models
          </CustomButton>
        </div>
        <h4 className="text-[#1D1D1F] font-semibold text-[38px] leading-[48px] mt-[35px]">
          Weight Indicator
        </h4>
        <h4 className="text-[#6A6A6A] max-w-[416px] font-medium text-lg leading-[28px] mt-5">
          Manage payload distribution and Improve Productivity with our Advanced
          Dumper Onboard Weighing system, designed for Reliability and Accuracy
        </h4>
      </div>
      <TabsSection />
      <DownloadDataSheetSection />
      <PartnersScroll />
      <div></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <div className="bg-repeat-x relative">
        <img src={heroBg} className="absolute top-0 w-full h-[50%] z-0" />
        <div
          className={cn(
            "py-5 md:py-24 pb-40 md:pb-50 mx-2 rounded-b-2xl flex justify-center bg-[radial-gradient(150.19%_150.19%_at_48.9%_-6.21%,#FFFFFF_0%,#FFFFFF_25.96%,#FCE6EA_47.6%,#D90429_68.27%,#0792B4_82.21%)]"
          )}
        >
          <div className="flex md:flex-row flex-col items-center gap-3 relative w-full max-w-5xl mx-auto px-4">
            <div className="flex flex-col gap-5 max-w-[565px] w-full">
              <IconText color="red" text="Indicators" />

              <div className="font-semibold text-[#1d1d1f] lg:text-[56px] lg:leading-[68px] md:text-5xl text-3xl">
                <h2>Weight</h2>
                <h2>Indicators</h2>
              </div>
              <p className="max-w-[449px] w-full text-[#6A6A6A] text-lg font-medium">
                Accurate data transmission in real time, precise monitoring and
                control
              </p>
              <div>
                <CustomButton>Request a quote</CustomButton>
              </div>
            </div>
            <div>
              <img src={groupImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto px-4 -mt-30 relative">
        <VideoPlayer className="overflow-hidden rounded-4xl border w-full">
          <VideoPlayerContent
            slot="media"
            src={Video}
            preload="auto"
            muted
            crossOrigin=""
            loop
            autoPlay
          />
          <VideoPlayerControlBar></VideoPlayerControlBar>
        </VideoPlayer>
      </div>
    </div>
  );
};

const TabsSection = () => {
  const tabTriggerClass =
    "text-xl text-[#1D1D1F] font-semibold md:text-[28px] md:leading-[40px] data-[state=active]:shadow-none cursor-pointer data-[state=active]:*:block relative";

  return (
    <div>
      <Tabs defaultValue="wi-400vp">
        <div className="max-w-5xl mx-auto w-full px-4 pt-25">
          <div className="flex justify-center">
            <TabsList className="bg-transparent lg:gap-[124px] gap-10">
              {[
                { value: "wi-400vp", label: "WI-400VP" },
                { value: "wi-10n", label: "WI-10N" },
              ].map((tabTrigger) => (
                <TabsTrigger
                  className={cn(tabTriggerClass)}
                  value={tabTrigger.value}
                >
                  {tabTrigger.label}
                  <span className="hidden absolute bg-[#0792B4] rounded-[50px] bottom-[-10px] w-[60%] h-0.75"></span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="bg-[#F8F7F5] py-12.5 mt-12.5">
          <div className="max-w-5xl mx-auto w-full px-4">
            {[
              { value: "wi-400vp", content: wi400vpCard },
              { value: "wi-10n", content: wi10nCard },
            ].map((tabContent) => (
              <TabsContent value={tabContent.value}>
                <div
                  className={cn(
                    `grid lg:grid-cols-${tabContent.content.length} lg:gap-0 gap-10`
                  )}
                >
                  {tabContent.content.map((card) => (
                    <GridCard card={card} length={tabContent.content.length} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

const GridCard = ({ card, length }: any) => {
  return (
    <div className="flex flex-col items-center text-[#1D1D1F] gap-4">
      <h5 className="font-semibold text-[26px] leading-[32px]">
        {card.deviceName}
      </h5>
      <div
        className={cn(
          "flex flex-col items-center gap-[50px] lg:mt-19 border-b px-[54.5px] pb-11",
          length === 2 ? "px-[30px]" : "px-[54.5px]"
        )}
      >
        <img className="md:h-80 lg:h-auto" src={card.image} />

        <div className="text-center space-y-[30px]">
          <div className="space-y-[15px]">
            <h6 className="font-semibold text-[26px] leading-[32px]">
              {card.fullName}
            </h6>
            <p className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              {card.description}
            </p>
          </div>
          <div className="flex justify-center">
            <CustomButton background="#0792B4">Learn More</CustomButton>
          </div>
        </div>
      </div>
      <div className="pt-10 lg:block hidden">
        <ul className="text-center px-[54.5px] space-y-12.5">
          {card.listitems.map((listItem: any) =>
            listItem.value === "" ? (
              <li className="relative font-medium text-lg leading-[28px]">
                <span className="absolute top-1/2">_</span>
                <h4 className="opacity-0">
                  0-5V/0-10V / 1-5V/2-10V / ± 5V / ± 10V / 0-20mA/ 4-20mA (16
                  bit)
                </h4>
                <h5 className="text-[#6A6A6A] opacity-0">
                  Analog Outputs (16 Bit)
                </h5>
              </li>
            ) : (
              <li className="font-medium text-lg leading-[28px]">
                <h4>{listItem.value}</h4>
                <h5 className="text-[#6A6A6A]">{listItem.label}</h5>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default WeightIndicators;
