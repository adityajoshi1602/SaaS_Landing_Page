import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 pt-0 lg:px-8 bg-gradient-to-b from-background via-background to-background/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-primary mb-4 inline-block px-3 py-1 bg-primary/10 rounded-full">
          ✨ New: Real-Time Product Analytics
        </p>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-pretty"
        >
          Build Faster. Scale Smarter. Ship With Confidence.
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          An all-in-one platform for fast-moving teams to deploy instantly, scale reliably, and focus on building real products.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base"
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base border-border text-black font-semibold hover:bg-blue-100"
          >
            Watch Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          No credit card required · 14-day free trial
        </p>
      </div>
    </section>
  );
}
