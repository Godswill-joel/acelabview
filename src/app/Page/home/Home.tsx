import AboutSection from "./About";
import CoursesSection from "./Courses";
import Hero from "./Hero";
import Offer from "./Offer";
import CareerPlacementSection from "./Placement";
import PlacementAndTestimonial from "./Testimonial";



export default function Home () {
    return (
        <div className="max-w-screeen">
        <Hero />
        <CoursesSection />
        <AboutSection />
        <Offer />
        <CareerPlacementSection />
        <PlacementAndTestimonial />
        </div>
    )
}