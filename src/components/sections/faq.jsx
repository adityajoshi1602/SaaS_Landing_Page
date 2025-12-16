import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How quickly can I deploy my first app?",
    answer:
      "You can deploy your first application in under 2 minutes. Simply connect your repository, configure your environment variables, and click deploy.",
  },
  {
    question: "What happens if my app goes down?",
    answer:
      "Our 99.99% uptime SLA ensures your app stays online. We have automatic failover, redundant systems, and 24/7 monitoring to prevent and quickly recover from any issues.",
  },
  {
    question: "Can I migrate from my current hosting provider?",
    answer:
      "We provide free migration assistance. Our team will help you move your application with zero downtime and minimal disruption.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We maintain SOC 2 Type II compliance, end-to-end encryption, automated security scanning, DDoS protection, and regular penetration testing.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
  },
  {
    question: "How do you handle scaling?",
    answer:
      "Scaling is automatic and transparent. Your application scales up during traffic spikes and down during quiet periods, ensuring optimal performance and cost efficiency.",
  },
];

export default function FAQ() {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Momentum.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
