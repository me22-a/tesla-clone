import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Motion({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s",
        }}
      >
        {children}
      </span>
    </div>
  );
}
