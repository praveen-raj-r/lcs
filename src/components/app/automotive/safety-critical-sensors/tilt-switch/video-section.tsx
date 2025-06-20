import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import Video from "@/assets/videos/tipper-video.mp4";

const VideoSection = () => {
  return (
    <div className="w-full relative pb-10 md:pb-20">
      <VideoPlayer className="overflow-hidden rounded-lg border w-full">
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
