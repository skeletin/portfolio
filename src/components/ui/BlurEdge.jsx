/**
 * BlurEdge — renders gradient fade overlays on the edges of a
 * scrollable container so clipped content blends out smoothly.
 *
 * Wrap the scroll container in a `relative` parent and drop
 * <BlurEdge /> next to (not inside) the scrollable div.
 *
 * Usage:
 *   <div className="relative h-full">
 *     <BlurEdge edges="bottom" size={48} />
 *     <div className="overflow-y-auto h-full">
 *       ...content...
 *     </div>
 *   </div>
 *
 * Props:
 *   edges     — space-separated: "top" "bottom" "left" "right"  (default "bottom")
 *   size      — fade depth in px (default 48)
 *   className — extra classes on every edge element
 */

const gradientDir = {
  top: "to bottom",
  bottom: "to top",
  left: "to right",
  right: "to left",
};

const positionStyles = {
  top: { top: 0, left: 0, right: 0 },
  bottom: { bottom: 0, left: 0, right: 0 },
  left: { top: 0, bottom: 0, left: 0 },
  right: { top: 0, bottom: 0, right: 0 },
};

const isVertical = (edge) => edge === "top" || edge === "bottom";

const BlurEdge = ({ edges = "bottom", size = 32, className = "" }) => {
  const activeEdges = edges.split(/\s+/).filter((e) => gradientDir[e]);

  return (
    <>
      {activeEdges.map((edge) => (
        <div
          key={edge}
          aria-hidden
          className={`absolute pointer-events-none z-10 ${className}`}
          style={{
            ...positionStyles[edge],
            ...(isVertical(edge)
              ? { height: size }
              : { width: size }),
            background: `linear-gradient(${gradientDir[edge]}, var(--color-page) 0%, transparent 100%)`,
            opacity: 0.75,
          }}
        />
      ))}
    </>
  );
};

export default BlurEdge;
