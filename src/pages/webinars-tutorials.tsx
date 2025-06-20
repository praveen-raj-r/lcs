/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";

import video1 from "@/assets/videos/video-1.mp4";
import video2 from "@/assets/videos/video-2.mp4";
const WebinarsTutorials = () => {
  return (
    <div className="mt-[-64px] relative">
      <HeroSection />
      <div className="flex w-full justify-center my-10">
        <div className=" w-full grid md:grid-cols-2 gap-5 mx-4">
          <Example video={video1} />
          <Example video={video2} />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full justify-center items-center pt-[64px] flex bg-black text-white">
      <div className="max-w-5xl w-full pt-20 pb-40">
        <h1 className="mb-8 text-[30px] md:text-[60px] font-medium text-center">
          Webinars & Tutorials
        </h1>
        <p className="text-center font-normal text-lg text-[#9C9C9D] px-5">
          Load cell indicators with best in class hardware for precise
          monitoring
        </p>
      </div>
    </div>
  );
};

const Example = ({ video }: any) => (
  <VideoPlayer className="overflow-hidden rounded-lg border">
    <VideoPlayerContent
      slot="media"
      src={video}
      preload="auto"
      muted
      crossOrigin=""
      loop
      autoPlay
    />
    <VideoPlayerControlBar></VideoPlayerControlBar>
  </VideoPlayer>
);

export default WebinarsTutorials;
