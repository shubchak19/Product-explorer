import { useState } from "react";
import { testimonialData } from "../../mock_data/testimonialData";
import TestimonialCard from "./TestimonialCard";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonialData.length) % testimonialData.length);
  const next = () => setIndex((index + 1) % testimonialData.length);

  return (
    <section className="p-8 py-12 bg-white rounded shadow text-center">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Testimonials
      </h2>
      <div className="overflow-hidden w-52 mx-auto">
        <TestimonialCard
          key={`${testimonialData[index].name}-${index}`}
          testimonial={testimonialData[index]}
        />
      </div>
      <div className="flex justify-around items-center">
        <button
          onClick={prev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ‹
        </button>
        <div className="flex justify-center items-center gap-2 my-16">
          {testimonialData.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ›
        </button>
      </div>
    </section>
  );
}
