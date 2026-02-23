
import Image from "next/image";
import ITF from "../../../public/assets/images/ITF.png";
import nabteb from "../../../public/assets/images/nabteb.png";
import Unitest from "../../../public/assets/images/Unitest.png";

const credentials = [
  {
    name: "Industrial Training Fund (ITF)",
    logo: ITF,
  },
//   {
//     name: "Federal Ministry of Labour & Productivity",
//     logo: "/logos/labour.png",
//   },
//   {
//     name: "Rivers State Ministry of Education",
//     logo: "/logos/rivers-edu.png",
//   },
  {
    name: "NABTEB",
    logo: nabteb,
  },
  {
    name: "Unitest Marine Simulators, Poland",
    logo: Unitest,
  },
];

export default function Credentials() {
  return (
    <section className="w-full bg-gray-50 py-16 overflow-hidden">
      <h2 className="text-center text-3xl text-black md:text-4xl font-bold mb-10">
        Our <span className="text-[#2661E9]">Credentials </span> 
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-10">
          {[...credentials, ...credentials].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[220px]"
            >
              <div className="h-30 w-52 relative">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-center text-gray-700 font-medium whitespace-nowrap">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
