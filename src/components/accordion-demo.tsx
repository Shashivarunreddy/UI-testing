"use client";

import { HoverAccordion } from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is it accessible?",
    answer:
      "Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard navigable. The component is built with proper focus management and ARIA attributes for screen reader compatibility.",
  },
  {
    question: "Can I use it with Tailwind CSS?",
    answer:
      "Absolutely. This component is styled with Tailwind classes and can be customized using your own Tailwind configuration.",
  },
  {
    question: "Does it support animations?",
    answer:
      "Yes, it comes with smooth open/close animations by default, and you can tweak them using utility classes or your own CSS transitions.",
  },
  {
    question: "Is it mobile-friendly?",
    answer:
      "Definitely. The component is responsive by default and works seamlessly across devices, including mobile, tablet, and desktop.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <HoverAccordion items={faqData} />
    </div>
  );
}
