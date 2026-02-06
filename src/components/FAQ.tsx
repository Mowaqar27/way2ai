import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "../data/workflows";

function FAQItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border border-slate-700/40 rounded-xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors"
      >
        <span className="text-base font-semibold text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about our n8n workflow templates.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
