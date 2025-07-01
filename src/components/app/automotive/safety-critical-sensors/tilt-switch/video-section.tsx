import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player"; 

const VideoSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full relative pb-10 md:pb-20">
      <VideoPlayer className="overflow-hidden rounded-lg border w-full">
        <VideoPlayerContent
          slot="media"
          src='https://github.com/praveen-raj-r/lcs/releases/download/v1.0.0-assets/tilt-switch.mp4'
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
