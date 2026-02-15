import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

const DotGrid = () => {
  const { theme } = useTheme();
  const dotColor = theme === "dark" ? "rgba(255,255,255," : "rgba(0,0,0,";
  const rows = 25;
  const cols = 35;
  const gap = 28;
  const w = cols * gap;
  const h = rows * gap;

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
      >
        <defs>
          <radialGradient id="dotFade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dotMask">
            <rect width={w} height={h} fill="url(#dotFade)" />
          </mask>
        </defs>
        <g mask="url(#dotMask)">
          {Array.from({ length: rows }).map((_, r) =>
            Array.from({ length: cols }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={c * gap + gap / 2}
                cy={r * gap + gap / 2}
                r={1.2}
                fill={`${dotColor}0.18)`}
              />
            ))
          )}
        </g>
      </motion.svg>
    </div>
  );
};

export default DotGrid;
