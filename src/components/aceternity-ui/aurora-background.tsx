"use client";
import { cn } from "@/lib/utils";
import type { CSSProperties, HTMLProps, ReactNode } from "react";

interface AuroraBackgroundProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg, #0ea5e9 10%, #6366f1 15%, #8b5cf6 20%, #ec4899 25%, #f97316 30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg, #000000 0%, #0f172a 7%, transparent 10%, transparent 12%, #0f172a 16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg, #ffffff 0%, #f1f5f9 7%, transparent 10%, transparent 12%, #ffffff 16%)",
              "--blue-300": "#7dd3fc", // Sky Blue
              "--blue-400": "#38bdf8", // Vivid Sky
              "--blue-500": "#0ea5e9", // Cyan
              "--indigo-300": "#a5b4fc", // Soft Indigo
              "--violet-200": "#c4b5fd", // Lavender
              "--pink": "#ec4899", // Hot Pink
              "--orange": "#f97316", // Bright Orange
              "--black": "#0f172a", // Soft Dark
              "--white": "#f8fafc", // Subtle White
              "--transparent": "transparent",
            } as CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
