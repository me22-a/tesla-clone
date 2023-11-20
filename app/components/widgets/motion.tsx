import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Motion({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  return (
    <div ref={ref}>
      <div
        className="h-[100vh] min-h-[100dvh] pt-14 flex flex-col justify-between text-center"
        style={{
          transform: isInView ? "none" : "",
          opacity: isInView ? 1 : 0,
          transition: "all 0.35s",
        }}
      >
        {children}
      </div>
    </div>
  );
}
