import * as React from "react";

export interface AccordionItem {
    question: string;
    answer: string;
}

export interface AccordionProps {
    items: AccordionItem[];
}

const FAQ: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionItemClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border rounded p-4 cursor-pointer"
                    onClick={() => handleAccordionItemClick(index)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{item.question}</h3>
                        <svg
                            className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    {activeIndex === index && (
                        <p className="mt-2 text-gray-700">{item.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;