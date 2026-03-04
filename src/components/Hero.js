import { PrimaryButton } from "./Button";

const Hero = () => (
  <section id="home" className="hero-gradient min-h-screen flex items-center">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="hero-content md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Stop Chasing Clients. Get Paid On Time.</h1>
        <p className="text-xl text-gray-600 mb-8">Done-for-you automated retainer follow-up system for marketing agencies — implemented in just 7 days, without awkward emails.</p>
        <PrimaryButton href="#contactForm">Book Your Free Overdue Invoice Audit</PrimaryButton>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="./images/image1_hero.png" alt="Success" className="w-full max-w-md" />
      </div>
    </div>
  </section>
);
export default Hero;