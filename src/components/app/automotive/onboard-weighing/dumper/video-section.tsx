import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import Video from "@/assets/videos/tipper-video.mp4";

const VideoSection = () => {
  return (
    <div className="w-full max-w-5xl px-4 mx-auto relative my-20 space-y-3">
      <h4 className="text-center text-[#1D1D1F] font-semibold md:text-[38px] md:leading-[48px] text-3xl">
        Know where your Truck at all times
      </h4>
      <h5 className="text-center text-[#6A6A6A] font-medium text-lg leading-[28px]">
        Increase asset security, maximize utilization, and improve routing with
        real-time GPS tracking alerts.
      </h5>
      <VideoPlayer className="overflow-hidden rounded-lg border w-full mt-10">
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
  );
};

export default VideoSection;
