import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left 
                 hover:text-primary-500 transition-colors duration-fast"
      >
        <span className="text-body font-semibold text-neutral-900 pr-8">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-neutral-500 transition-transform duration-base ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-body-small text-neutral-700 leading-body">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

interface FAQAccordionProps {
  items: { id: string; question: string; answer: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
