import React from "react";

const Footer = () => {
  var date = new Date().getFullYear();
  return (
    <footer className="home-footer">
      <div className="home-footer-content section-center">
        <section className="copyright">
          <p>People Ops at Status &copy; {date}</p>
        </section>
        <nav className="footer-links">
          <a href="/#">Latest Posts</a>
          <a href="/#">Facebook</a>
          <a href="/#">Twitter</a>
          <a href="/#">Ghost</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
