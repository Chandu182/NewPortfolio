import React from 'react';
import './Footer.css'; // Ensure this file exists for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <nav className="footerNav">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sreekar-b-0143861b4/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/sreekar0009" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
            <li>
              <a href="mailto:sreekar.999@outlook.com">
                Email
              </a>
            </li>
          </ul>
        </nav>

        {/* Mini Navbar */}
        <nav className="miniFooterNav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Experience">Experience</a>
            </li>
            <li>
              <a href="/SkillSet">Skills</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/Article">Articles</a>
            </li>
          </ul>
        </nav>

        <p>&copy; {new Date().getFullYear()} Sreekar B. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
