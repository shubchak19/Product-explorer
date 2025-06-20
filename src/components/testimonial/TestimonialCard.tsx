import type { Testimonial } from "../../mock_data/testimonialData";

type TestimonialProps = {
  testimonial: Testimonial;
};
export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-blue-200 p-2 rounded-md w-full">
      <img src={testimonial.image} className="w-full" alt="user image" />
      <p className="italic mt-4">"{testimonial.text}"</p>
      <p className="mt-4  text-sm font-semibold text-gray-700">- {testimonial.name}</p>
    </div>
  );
}
