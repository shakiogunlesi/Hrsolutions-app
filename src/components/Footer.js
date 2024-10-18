import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/images/facebookicon.png';
import TwitterIcon from '../assets/images/twittericon.png';
import InstagramIcon from '../assets/images/instagramicon.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer bg-gray-900 py-8 text-white">
      <div className="container lg:px-[150px] sm:px-6">
        <section className="text-left">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
            {/* Company Section */}
            <div className="flex flex-col self-start text-white text-2xl font-bold">
              HR Solutions
            </div>

            {/* Company Links */}
            <div className='flex flex-col self-start'>
              <h2 className="text-white text-[22px] font-bold">Company</h2>
              <p className="text-white py-2 text-[20px]">
                <Link to="/">Who We Are</Link>
              </p>
              <p className="text-white py-2 text-[20px]">
                <Link to="/">Careers</Link>
              </p>
            </div>

            {/* Services Links */}
            <div className='flex flex-col self-start'>
              <h2 className="text-white text-[22px] font-bold">Services</h2>
              <p className="text-white py-2 text-[20px]">
                <Link to="/">Recruitment</Link>
              </p>
              <p className="text-white pb-2 text-[20px]">
                <Link to="/">Employee Training</Link>
              </p>
              <p className="text-white pb-2 text-[20px]">
                <Link to="/">HR Consulting</Link>
              </p>
              <p className="text-white pb-2 text-[20px]">
                <Link to="/">Talent Management</Link>
              </p>
            </div>

            {/* Contact and Social Media */}
            <div className='flex flex-col self-start'>
              <h2 className="text-white text-[22px] font-bold">Get in Touch</h2>
              <p className="text-white py-2 text-[20px]">
                <Link to="/">Contact Us</Link>
              </p>
              <div className="flex gap-4 pt-2">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook" className="w-[30px] h-[30px]" />
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter" className="w-[30px] h-[30px]" />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" className="w-[30px] h-[30px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 HR Solutions. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
