import { InlineWidget } from "react-calendly";

const BookingSection = () => {
  return (
    <section id="bookingSection" className="section-padding trust-bg">
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Book Your Free Retainer Audit</h2>
          <p>
            In 15 minutes, we’ll identify where cash is stuck in your agency.
          </p>
        </div>

        <div className="card" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <iframe
            src="https://calendly.com/joona-lusa"
            width="100%"
            height="650px"
            frameBorder="0" />
        </div>

      </div>
    </section>
  );
};

export default BookingSection;