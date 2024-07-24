import Bloggers from "@/components/Bloggers";
import FeauturedBlogs from "@/components/FeauturedBlogs";
import Footer from "@/components/Footer";
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingBlogs from "@/components/UpcommingBlogs";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-h-screen antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeauturedBlogs />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcommingBlogs />
      <Bloggers />
      <Footer />
    </main>
  );
}
