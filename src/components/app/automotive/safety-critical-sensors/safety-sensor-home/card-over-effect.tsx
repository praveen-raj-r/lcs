import { HoverEffect } from "@/components/ui/card-hover-effect";

function SensorCardHoverEffect() {
  const projects = [
    {
      title: " 🞂 Accurate Tilt Detection",
      description:
        "Detect angular deviations with high precision to prevent unsafe operations and ensure structural stability.",
    },
    {
      title: "🞂 Built for Rugged Conditions",
      description:
        "Designed for durability in high-vibration, dusty, or extreme temperature environments—ideal for off-road vehicles, construction machinery, and heavy equipment.",
    },
    {
      title: "🞂 Fail-Safe Alerts & Automation",
      description:
        "Integrated with control systems to trigger alerts, cutoffs, or emergency actions during unsafe tilt conditions.",
    },
    {
      title: "🞂 Compact & Easy Integration",
      description:
        "Lightweight, compact form factor with flexible mounting options and digital/analog output compatibility.",
    },
    {
      title: "🞂 Automatic Safety Response",
      description:
        "Integrated with control systems to trigger alarms, shutdowns, or corrective actions when critical tilt thresholds are breached.",
    },
    {
      title: "🞂 Robust & Maintenance-Free",
      description:
        "Encapsulated designs resist shock, vibration, dust, and moisture, ensuring long-lasting, trouble-free operation.",
    },
  ];
  return (
    <div className="max-w-5xl w-full mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}

export default SensorCardHoverEffect;
