import onboardWeighingVideo from "@/assets/videos/onboard-weighing.mp4";
import {
  VideoPlayer,
  VideoPlayerContent,
} from "@/components/ui/kibo-ui/video-player";

const VideoSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 w-full relative py-10">
      <VideoPlayer className="overflow-hidden rounded-4xl border w-full">
        <VideoPlayerContent
          slot="media"
          src={onboardWeighingVideo}
          preload="auto"
          muted
          crossOrigin=""
          loop
          autoPlay
        />
      </VideoPlayer>
    </div>
  );
};

export default VideoSection;
