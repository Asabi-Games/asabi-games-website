import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Support', url: '/support' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="bg-[#070810] border-t border-[#1e293b] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#e84545] transition-colors duration-200 text-2xl"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.url}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-[#94a3b8]">
          © 2025 Asabi Games. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
