const contactUsForm = () => (
    <section id="contactForm" class="section-padding trust-bg">
        <div class="container">
            <div>
                <h2>Contact Us</h2>
                <p>Have questions? Ready to stabilize your organization’s cash flow? Let’s talk.</p>
            </div>
            <div class="card">
                <form id="contactForm" class="contact-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Work Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="company">Agency Name</label>
                        <input type="text" id="company" name="company" />
                    </div>
                    <div class="form-group">
                        <label for="message">How can we help?</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <div>
                        <button type="submit" class="primary-btn">
                            Book My Free Audit
                        </button>
                        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#64748b"}}>
                            No spam. No sales pressure. Just a quick 15-minute audit.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

export default contactUsForm;