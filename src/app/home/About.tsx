"use client";

import { Button } from "../components/Button";
import { values } from "../data/data";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[#2661E9] font-semibold mb-2 text-4xl">Who are We?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Acelabview Academy
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Acelabview Academy, we empower students with cutting-edge skills
            and certifications that meet global industry standards. Our hands-on
            approach ensures you’re not just learning but applying your
            knowledge in real-world scenarios. With a proven track record in job
            placement, we are your trusted partner for career advancement.
          </p>

          <Button className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold  transition-colors" size="md">
            Learn More About Us
          </Button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            const positionClasses =
              index === 1
                ? "row-span-2 flex flex-col justify-center"
                : "";
            return (
              <div
                key={index}
                className={`${item.color} ${positionClasses} text-white p-5 rounded-xl flex flex-col items-center text-center shadow-lg`}
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
