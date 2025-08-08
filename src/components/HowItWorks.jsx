import React from 'react';
import { Lightbulb, MessageCircle, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "1. Post a Query",
    description: "Submit your question or problem to the community.",
    icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "2. Get Responses",
    description: "Receive helpful answers from others instantly.",
    icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "3. Mark Solved",
    description: "Close the loop by marking the best response.",
    icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-4 text-gray-900" id='howitworks'>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Just three simple steps to get the help you need.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow hover:shadow-md bg-white transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

