import { ArrowRight } from "lucide-react";

export default function TowerTestingCard() {
  return (
    <div className="flex justify-center items-center w-full bg-[#F8F7F5]">
      <div className="flex max-w-5xl mx-4 w-full py-10 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tower Testing Solution
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Ensure structural integrity, safety, and regulatory compliance
              with TTS — your end-to-end system for intelligent tower testing.
              Key Capabilities: Real-time Monitoring of tower stress,
              deflection, and environmental conditions Instant Data Access for
              rapid evaluation Comprehensive Reports for audit and certification
              Streamlined Analysis for faster decision-making Built for telecom
              and power infrastructure,
              <br />
              <br />
              TTS empowers field engineers and compliance teams with a reliable,
              precise, and efficient testing workflow — ensuring every tower
              stands strong with confidence.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-red-600 font-medium hover:underline text-base"
            >
              See more <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="relative w-full flex justify-center h-full z-3 px-4">
            <img
              src="/projects/tower-testing/laptop-image.png"
              alt="Tower Testing System"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
