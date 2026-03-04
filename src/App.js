import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhyItWorks from './components/WhyItWorks';
// import ContactUsForm from './components/ContactUsForm';
import BookingSection from './components/BookingSection';
import ProblemSection from './Features/ProblemSection';
import { PrimaryButton } from './components/Button';

function App() {
  return (
    <div className="text-gray-800">
      <NavBar />
      <Hero />
      <ProblemSection />

      {/* Solution Section */}
      <section className="section-psxadding bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">We Handle Overdue Invoices So You Don't Have To</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard icon="fa-search-dollar" title="Audit Your Overdue Invoices" desc="We analyze your current overdue invoices and identify the best approach for each client." />
            <FeatureCard icon="fa-robot" title="Implement Polite, Automated Follow-Ups" desc="Customized email sequences that maintain professionalism while ensuring payment." />
            <FeatureCard icon="fa-chart-line" title="Monitor & Report Weekly" desc="Transparent reporting so you always know the status of collections efforts." />
          </div>
          <div className="text-center">
            <PrimaryButton>Claim Your Free Overdue Invoice Audit</PrimaryButton>
          </div>
        </div>
      </section>

      <WhyItWorks />
      <SocialProof />
      <BookingSection />
      <Footer />
    </div>
  );
}

// Small helper component for this file
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm text-center">
    <div className="feature-icon rounded-full p-4 inline-flex mb-6">
      <i className={`fas ${icon} text-2xl`}></i>
    </div>
    <h3 className="font-bold text-xl mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-xl font-bold mb-2">RetainrFlow</h3>
      <p className="text-gray-400 mb-6">Done-for-you retainer follow-up for organizations</p>
      <div className="flex justify-center space-x-6">
        <i className="fab fa-twitter text-gray-400 cursor-pointer hover:text-white"></i>
        <i className="fab fa-linkedin text-gray-400 cursor-pointer hover:text-white"></i>
      </div>
      <p className="mt-8 text-gray-500">&copy; 2026 RetainrFlow. All rights reserved.</p>
    </div>
  </footer>
);

export default App;