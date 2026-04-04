"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import back from "../../../public/assets/images/cyber-security-concept-digital-art.jpg";
import { testimonialImages } from "../data/data";

export default function PlacementAndTestimonial() {
  return (
    <div className="w-full">
      <section
        className="relative h-auto bg-fixed bg-center bg-cover py-24"
        style={{ backgroundImage: `url(${back.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-0"></div>

        {/* Heading */}
        <div className="relative z-10 text-center text-white mb-12">
          <h4 className="text-[#2661E9] font-semibolt mt-17 text-4xl">
            Testimonial
          </h4>
          <h2 className="text-4xl font-bold mt-2">
            What Our Students Say About Us
          </h2>
        </div>

        {/* ===== CAROUSEL TESTIMONIALS ===== */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">

            {testimonialImages.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl bg-white shadow-lg overflow-hidden"
              >

                <div className="relative h-72 sm:h-80 md:h-96 p-4">

                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                </div>

              </motion.div>

            ))}

          </div>
        </div>

      </section>
    </div>
  );
}