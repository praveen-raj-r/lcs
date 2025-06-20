import tiltSwitchMetrics from "@/assets/safety-critical-sensors/tiltswitch/metrics.png";

const Metrics = () => {
  return (
    <div className="w-full m-0 p-0">
      <img
        src={tiltSwitchMetrics}
        alt="Tilt Switch Metrics"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Metrics;
