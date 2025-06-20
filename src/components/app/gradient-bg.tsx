import { useEffect, useRef } from "react";

const GradientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const gradients = [
      {
        colors: ["#D90429", "#1D1D1F"],
        angle: 0,
        speed: 0.02,
      },
      {
        colors: ["#FF8C00", "#00416A"],
        angle: Math.PI / 3,
        speed: 0.015,
      },
      {
        colors: ["#00FFAA", "#00008B"],
        angle: Math.PI / 6,
        speed: 0.01,
      },
    ];

    function drawGradient(gradDef: (typeof gradients)[0]) {
      if (!ctx) return;
      const grad = ctx.createLinearGradient(
        width / 2,
        height / 2,
        width / 2 + width * Math.cos(gradDef.angle),
        height / 2 + height * Math.sin(gradDef.angle)
      );

      const step = 1 / (gradDef.colors.length - 1);
      gradDef.colors.forEach((color, i) => {
        grad.addColorStop(i * step, color);
      });

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw layered gradients with different blend modes
      gradients.forEach((gradDef, index) => {
        gradDef.angle += gradDef.speed;

        // Set blend mode, cycling through some blend modes for mixing effect
        const blendModes: GlobalCompositeOperation[] = [
          "multiply",
          "screen",
          "overlay",
        ];
        ctx.globalCompositeOperation = blendModes[index % blendModes.length];

        drawGradient(gradDef);
      });

      // Reset blend mode for next frame
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default GradientCanvas;
