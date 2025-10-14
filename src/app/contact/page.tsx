"use client";

import Image from "next/image";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { selection } from "@/app/data/data";
import { Button } from "@/app/components/Button";
import { Pop, Float, SlideUp } from "@/app/style/animation";
import { FaPhone, FaSpinner, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaLocationDot, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";

type LinkKeys = "club" | "golf";

type Social = { id: string; text: string };

type Field =
  | { id: string; as: "input"; type: string; placeholder: string; rows?: never }
  | { id: string; as: "textarea"; placeholder: string; rows: number; type?: never };

const socials: Social[] = [
  { id: "club", text: "Ace la" },
  { id: "golf", text: "The Golf Prince Hotel" },
];

const fields: Field[] = [
  { id: "name", as: "input", type: "text", placeholder: "Name" },
  { id: "email", as: "input", type: "email", placeholder: "Email" },
  { id: "telephone", as: "input", type: "tel", placeholder: "Phone" },
  { id: "messenger", as: "textarea", placeholder: "Message", rows: 4 },
];

const contacts = [
  { id: "email", icons: FaEnvelope, text: "training@acelabview.com" },
  { id: "voice", icons: FaPhone, text: "Voice Call Line: 09130058134" },
  { id: "whatsapp", icons: FaWhatsapp, text: "WhatsApp Line: 0803 880 3207" },
  { id: "address", icons: FaLocationDot, text: "Office: No 2 Orji Close, opposite Da'phantom Arena Off Ada George Road, Port Harcourt" },
];

const links: Record<LinkKeys, { icon: any; link: string }[]> = {
  club: [
    { icon: FaFacebookF, link: "https://www.facebook.com/share/v/1YZ9r7MJcq/?mibextid=wwXIfr" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ace-labview-ltd/" },
    { icon: FaSquareXTwitter, link: "https://x.com/acelabview1?s=11" },
    { icon: FaInstagram, link: "https://www.instagram.com/acelab_marine?igsh=MWF6OTUwaXlqZWswdg%3D%3D&utm_source=qr" },
  ],
  golf: [
    { icon: FaFacebookF, link: "https://www.facebook.com/share/v/1YZ9r7MJcq/?mibextid=wwXIfr" },
    { icon: FaInstagram, link: "https://www.instagram.com/acelab_marine?igsh=MWF6OTUwaXlqZWswdg%3D%3D&utm_source=qr" }
  ]
};

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    setLoading(true);
    setShowSuccess(false);

    try {
      const result = await emailjs.sendForm(
        "service_1bskukl",
        "template_gb4jrdc",
        formRef.current,
        "vicKK08hVXZppwFXa"
      );

      console.log("EmailJS result:", result);
      setShowSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Contact Hero"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-[#2661E9]">Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Everything you need to know or ask — we’re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS & FORM SECTION */}
      <section className="bg-[#0a0a0a] text-white py-16 px-4 md:px-20 space-y-32">
        <div className="w-[85%] md:max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#2661E9]">
                General Enquiries
              </h2>
              {contacts.map(({ id, icons: Icon, text }) => (
                <div key={id} className="flex items-start gap-4 mb-6">
                  <Icon size={25} fontWeight={300} className="text-[#2661E9]" />
                  <p className="font-medium text-lg whitespace-pre-line text-gray-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-10 space-y-8">
              <h2 className="text-3xl font-semibold uppercase tracking-wide text-[#2661E9]">
                Follow Us
              </h2>
              <div className="flex items-center gap-8">
                {socials.map(({ id, text }) => (
                  <div key={id} className="gap-4 flex flex-col items-center">
                    <p className="uppercase font-medium text-[15px] text-gray-300">
                      {text}
                    </p>
                    <div className="flex items-center gap-4">
                      {links[id as LinkKeys].map(({ icon: Icon, link }, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="hover:text-[#2661E9] transition-colors cursor-pointer text-gray-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <form
            ref={formRef}
            onSubmit={handleSend}
            className="w-full md:w-1/2 h-max space-y-6 text-gray-900 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-gray-700"
          >
            {fields.map(({ id, as: Tag, ...props }) => {
              const base =
                "w-full px-3 py-2 rounded bg-white/90 text-gray-800 resize-none border border-gray-300 focus:outline-none focus:border-[#2661E9]";
              return (
                <Tag key={id} name={id} {...props} className={base} disabled={loading} />
              );
            })}
            {/* COURSE DROPDOWN */}
            <div>
              <label
                htmlFor="course"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Select Course
              </label>
              <select
                id="course"
                name="course"
                required
                className="w-full px-3 py-2 rounded bg-white/90 text-gray-800 border border-gray-300 focus:outline-none focus:border-[#2661E9]"
                disabled={loading}
              >
                <option value="">Choose a Course</option>
                {selection.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold transition-colors w-full py-3 rounded-md"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner size={20} className="animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send"
              )}
            </Button>

            {showSuccess && (
              <Pop className="w-max bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                Message sent successfully!
              </Pop>
            )}
          </form>
        </div>

        <SlideUp>
          <iframe
            width="100%"
            height="700"
            loading="lazy"
            style={{ border: 0 }}
            className="sm:h-[620px] rounded-2xl shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.790347859203!2d6.999967773822685!3d4.820940940086005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdaeae2f5e4f%3A0x3cfae77ff0f04b61!2sNo.%202%20Orji%20Close%2C%20Off%20Ada%20George%20Rd%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1728589931339!5m2!1sen!2sng"
          />
        </SlideUp>
      </section>
    </main>
  );
}
