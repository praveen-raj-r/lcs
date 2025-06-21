import tiltSwitchMetrics from "@/assets/safety-critical-sensors/tiltswitch/metrics.png";

const Metrics = () => {
  return (
    <div className="w-full m-0 md:pt-30 pt-10">
      <img
        src={tiltSwitchMetrics}
        alt="Tilt Switch Metrics"
        className="w-full max-w-5xl mx-auto px-4 h-auto object-contain"
      />
    </div>
  );
};

export default Metrics;
