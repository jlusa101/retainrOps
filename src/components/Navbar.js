const NavBar = () => (
    <nav class="navbar">
        <div class="nav-container">
            <a href="#home" class="logo">
                <i class="fas fa-rocket logo-icon"></i>
                <span>RetainrOps</span>
            </a>
            <button class="mobile-menu-button" id="mobileMenuButton">
                <i class="fas fa-bars"></i>
            </button>

            <div class="nav-links" id="navLinks">
                <a href="#home" class="nav-link">Home</a>
                <a href="#whyItWorks" class="nav-link">Why It Works</a>
                <a href="#socialProof" class="nav-link">Social Proof</a>
                <a href="#bookingSection" class="nav-link">Contact</a>
                {/* <a href="www.google.com" class="cta-button">Login</a> */}
            </div>
        </div>
    </nav>
);

export default NavBar;