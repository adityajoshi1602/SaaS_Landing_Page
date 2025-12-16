import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Connect Your Project",
    description: "Connect your repository or deploy directly from the dashboard.",
  },
  {
    number: "02",
    title: "Configure & Deploy",
    description: "Set environment variables and deploy with a single click.",
  },
  {
    number: "03",
    title: "Monitor & Scale",
    description:
      "Track performance and scale automatically with our intelligent system.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      });

      steps.forEach((_, index) => {
        const stepEl = document.getElementById(`step-${index}`);
        if (!stepEl) return;

        gsap.from(stepEl, {
          scrollTrigger: {
            trigger: stepEl,
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty"
          >
            Deploy and Scale in Three Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} id={`step-${index}`} className="relative">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
