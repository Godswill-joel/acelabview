import Image from "next/image";
import { testimonials } from "../data/data";
import back from "../../../public/assets/images/cyber-security-concept-digital-art.jpg";

export default function PlacementAndTestimonial() {
  return (
    <div className="w-full ">
      <section
        className="relative h-auto bg-fixed bg-center bg-cover py-24"
        style={{ backgroundImage: `url(${back.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-0"></div>

        <div className="relative z-10 text-center text-white mb-12">
          <h4 className="text-[#2661E9] font-semibolt mt-17 text-4xl">Testimonial</h4>
          <h2 className="text-4xl font-bold mt-2">What Our Students Say About Us</h2>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <p className="text-sm mb-4 line-clamp-3">{item.text}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-[#2661E9]">{item.name}</h3>
                <p className="text-xs text-gray-500">
                  {item.program} • {item.year}
                </p>
              </div>
              <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
